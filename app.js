const http = require('http');
const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Shivakrishna Vaddepalli | DevOps Engineer</title>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background: #f4f4f4; }
        .header { background: #1a73e8; color: white; padding: 20px; text-align: center; border-radius: 10px; }
        .contact { background: #34a853; color: white; padding: 10px; margin: 20px 0; border-radius: 5px; }
        .skills { background: #fbbc04; padding: 15px; margin: 15px 0; border-radius: 5px; }
        .experience { background: white; padding: 20px; margin: 15px 0; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        h1, h2 { color: #1a73e8; }
        ul { line-height: 1.6; }
        .cicd-badge { background: #4285f4; color: white; padding: 5px 10px; border-radius: 20px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 Shivakrishna Vaddepalli</h1>
        <p><strong>DevOps Engineer | TCS (3.6+ Years)</strong></p>
        <span class="cicd-badge">CI/CD Pipeline LIVE Demo</span>
    </div>

    <div class="contact">
        <strong>📞 +91-9052780306</strong> | 
        <strong>✉️ vaddepallishivakrishna1@gmail.com</strong> | 
        <strong>💼 LinkedIn: linkedin.com/in/shivakrishna-vaddepalli</strong>
    </div>

    <div class="skills">
        <h2>🎯 Core Expertise</h2>
        <ul>
            <li><strong>AWS:</strong> EC2, S3, RDS, VPC, ELB, CloudWatch (25% cost savings)</li>
            <li><strong>CICD:</strong> Jenkins, Git, Docker (70% faster deployments)</li>
            <li><strong>IaC:</strong> Terraform, Ansible</li>
            <li><strong>Containers:</strong> Docker, Kubernetes (99.9% uptime)</li>
            <li><strong>Monitoring:</strong> Prometheus, Grafana</li>
        </ul>
    </div>

    <div class="experience">
        <h2>🏢 TCS | DevOps Engineer (Mar 2022 - Present)</h2>
        <ul>
            <li>Engineered Jenkins CICD pipelines for Eli Lilly & AstraZeneca</li>
            <li>Automated AWS infrastructure with Terraform (80% less manual work)</li>
            <li>Kubernetes microservices deployment with HPA & zero-downtime</li>
            <li>Production support: 99.9% uptime, 40% faster incident response</li>
            <li>AWS cost optimization: 25% savings via right-sizing</li>
        </ul>
    </div>

    <div class="header" style="background: #ea4335;">
        <h2>🔥 This Page = LIVE CI/CD Demo!</h2>
        <p>GitHub → Jenkins → Docker → Node.js | Auto-deployed via your pipeline</p>
        <p><em>Commit → Push → Build → LIVE in 30 seconds</em></p>
    </div>
</body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(htmlContent);
}).listen(3000, () => {
    console.log('🚀 Shivakrishna DevOps Portfolio LIVE on port 3000');
    console.log('💻 Visit: http://localhost:3000');
});

