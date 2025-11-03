<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <p class="text-gray-500 uppercase tracking-wide">Explore My</p>
      <h2 class="text-3xl font-bold mb-12">Skills</h2>

      <!-- 两列网格 -->
      <div class="grid md:grid-cols-2 gap-8 text-left">
        <!-- 左边 Skills 卡片 -->
        <div class="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 class="text-lg font-semibold mb-4">Skills</h3>
          <ul class="space-y-4 text-sm text-gray-700">
            <li>
              <strong>✔ Data Analysis</strong><br />
              Leveraging Python or R in Jupyter/RMarkdown for data-driven insights
            </li>
            <li>
              <strong>✔ GIS Solutions</strong><br />
              Geospatial data analysis with Esri products
            </li>
            <li>
              <strong>✔ Machine Learning</strong><br />
              Building predictive models with scikit-learn
            </li>
            <li>
              <strong>✔ Web Development</strong><br />
              Creating and maintaining websites with HTML/CSS/JavaScript
            </li>
          </ul>
        </div>

        <!-- 右边 About Me 卡片 -->
        <div class="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 class="text-lg font-semibold mb-4">About Me</h3>

          <h4 class="font-medium mb-2">Experience</h4>
          <ul class="mb-6 text-sm text-gray-700 space-y-1">
            <li>• GIS Consultant at ESRI</li>
            <li>• Data Science Research Assistant at LSE & Manchester University</li>
            <li>• 3+ years experience in Python, R, SQL, JavaScript, GIS</li>
          </ul>

          <h4 class="font-medium mb-2">Education</h4>
          <ul class="text-sm text-gray-700 space-y-1">
            <li>• MSc Geographic Data Science – London School of Economics</li>
            <li>• IBM Data Science Professional Certificate</li>
            <li>• BA Chinese & Business Management – University of Manchester</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>