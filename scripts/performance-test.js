#!/usr/bin/env node

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

const performanceTest = async () => {
  console.log('🚀 Starting performance analysis...');
  
  // URLs to test
  const urls = [
    'http://localhost:3000',
    'http://localhost:3000/about',
    'http://localhost:3000/services',
    'http://localhost:3000/contact',
    'http://localhost:3000/blog',
  ];

  // Launch Chrome
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
  });

  const results = [];

  for (const url of urls) {
    console.log(`📊 Testing: ${url}`);
    
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
    };

    try {
      const runnerResult = await lighthouse(url, options);
      const scores = {
        url,
        performance: runnerResult.lhr.categories.performance.score * 100,
        accessibility: runnerResult.lhr.categories.accessibility.score * 100,
        bestPractices: runnerResult.lhr.categories['best-practices'].score * 100,
        seo: runnerResult.lhr.categories.seo.score * 100,
        metrics: {
          fcp: runnerResult.lhr.audits['first-contentful-paint'].displayValue,
          lcp: runnerResult.lhr.audits['largest-contentful-paint'].displayValue,
          cls: runnerResult.lhr.audits['cumulative-layout-shift'].displayValue,
          fid: runnerResult.lhr.audits['max-potential-fid'].displayValue,
          tti: runnerResult.lhr.audits['interactive'].displayValue,
        }
      };
      
      results.push(scores);
      console.log(`✅ Performance: ${scores.performance}/100`);
      
    } catch (error) {
      console.error(`❌ Error testing ${url}:`, error.message);
    }
  }

  await chrome.kill();

  // Generate report
  const report = {
    timestamp: new Date().toISOString(),
    results,
    summary: {
      avgPerformance: results.reduce((sum, r) => sum + r.performance, 0) / results.length,
      avgAccessibility: results.reduce((sum, r) => sum + r.accessibility, 0) / results.length,
      avgBestPractices: results.reduce((sum, r) => sum + r.bestPractices, 0) / results.length,
      avgSeo: results.reduce((sum, r) => sum + r.seo, 0) / results.length,
    }
  };

  // Save report
  const reportPath = path.join(__dirname, 'performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log('\n📋 Performance Summary:');
  console.log(`🎯 Average Performance Score: ${report.summary.avgPerformance.toFixed(1)}/100`);
  console.log(`♿ Average Accessibility Score: ${report.summary.avgAccessibility.toFixed(1)}/100`);
  console.log(`✨ Average Best Practices Score: ${report.summary.avgBestPractices.toFixed(1)}/100`);
  console.log(`🔍 Average SEO Score: ${report.summary.avgSeo.toFixed(1)}/100`);
  console.log(`\n📄 Full report saved to: ${reportPath}`);

  return report;
};

// Bundle size analysis
const analyzeBundleSize = () => {
  console.log('\n📦 Analyzing bundle size...');
  
  const buildDir = path.join(__dirname, '.next');
  if (!fs.existsSync(buildDir)) {
    console.log('❌ No build found. Run npm run build first.');
    return;
  }

  const staticDir = path.join(buildDir, 'static');
  if (fs.existsSync(staticDir)) {
    const getDirSize = (dir) => {
      let size = 0;
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          size += getDirSize(filePath);
        } else {
          size += stat.size;
        }
      }
      
      return size;
    };

    const totalSize = getDirSize(staticDir);
    const sizeMB = (totalSize / (1024 * 1024)).toFixed(2);
    
    console.log(`📊 Total bundle size: ${sizeMB} MB`);
    
    if (sizeMB > 5) {
      console.log('⚠️  Bundle size is large. Consider code splitting and tree shaking.');
    } else {
      console.log('✅ Bundle size is optimized.');
    }
  }
};

// Main execution
if (require.main === module) {
  (async () => {
    try {
      await performanceTest();
      analyzeBundleSize();
    } catch (error) {
      console.error('❌ Performance test failed:', error);
      process.exit(1);
    }
  })();
}

module.exports = { performanceTest, analyzeBundleSize };
