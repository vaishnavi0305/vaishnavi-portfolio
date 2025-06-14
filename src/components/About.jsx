import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-2 inline-block border-blue-500">
          About Me
        </h2>

        <p className="text-lg leading-relaxed mb-8">
          I’m a Cloud Engineer with 3.7 years of experience in cloud operations,
          infrastructure automation, and DevOps practices. I specialize in AWS,
          Terraform, Ansible, Jenkins, Docker, Kubernetes, and CI/CD pipeline automation.
          I’m passionate about building scalable, secure, and highly available infrastructure.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left text-sm">
          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Cloud</h4>
            <ul className="list-disc ml-5">
              <li>AWS (EC2, VPC, S3, IAM)</li>
              <li>Azure (basic exposure)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Infrastructure as Code</h4>
            <ul className="list-disc ml-5">
              <li>Terraform</li>
              <li>Ansible</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-blue-600">CI/CD</h4>
            <ul className="list-disc ml-5">
              <li>Jenkins</li>
              <li>Maven</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Containerization</h4>
            <ul className="list-disc ml-5">
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Helm</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Languages & Scripting</h4>
            <ul className="list-disc ml-5">
              <li>Python</li>
              <li>Bash/Shell</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Monitoring</h4>
            <ul className="list-disc ml-5">
              <li>Prometheus & Grafana</li>
              <li>Alertmanager</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

