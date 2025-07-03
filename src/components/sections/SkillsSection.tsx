'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Cloud, Database, Network, Shield, Wrench } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skillCategories = [
  {
    icon: Code,
    title: 'Languages & Frameworks',
    skills: [
      'Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'C/C++', 'R', 'HTML/CSS', 'XML',
      'Node.js', 'React', 'Flask', 'FastAPI', 'Angular'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    skills: [
      'Amazon Web Services (AWS)', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform',
      'Jenkins', 'GitLab CI/CD', 'Microservices', 'Serverless', 'Lambda', 'EC2', 'S3'
    ]
  },
  {
    icon: Database,
    title: 'Data & Analytics',
    skills: [
      'ETL Pipelines', 'Data Engineering', 'TIBCO Data Virtualization', 'PostgreSQL',
      'MySQL', 'MongoDB', 'Redis', 'Apache Kafka', 'Elasticsearch', 'Pandas', 'NumPy', 'Data Warehousing'
    ]
  },
  {
    icon: Network,
    title: 'APIs & Integration',
    skills: [
      'REST APIs', 'SOAP', 'GraphQL', 'ODATA', 'API Gateway', 'Webhook Implementation',
      'Third-party Integrations', 'Postman', 'OpenAPI Specification', 'Middleware'
    ]
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    skills: [
      'SOC 2 Type II', 'PCI DSS', 'OAuth2', 'SAML', 'Kerberos', 'LDAP', 'SSL/TLS',
      'Penetration Testing', 'Vulnerability Assessment', 'OWASP', 'Security Audits'
    ]
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: [
      'Git/GitHub', 'JIRA', 'Confluence', 'Wireshark', 'Fiddler', 'TIBCO EMS',
      'IBM 4690', 'Splunk', 'New Relic', 'Datadog', 'Grafana'
    ]
  }
]

const featuredSkills = [
  { name: 'Python', level: 95, category: 'Expert' },
  { name: 'TypeScript', level: 90, category: 'Expert' },
  { name: 'AWS', level: 88, category: 'Advanced' },
  { name: 'Security Compliance', level: 92, category: 'Expert' },
  { name: 'Data Engineering', level: 90, category: 'Expert' },
  { name: 'System Architecture', level: 94, category: 'Expert' },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-black smooth-transition">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technical stack spanning full-stack development, cloud architecture, 
            data engineering, and enterprise security.
          </p>
        </motion.div>

        {/* Featured Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Core Competencies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 card-hover bg-white dark:bg-black border-gray-200 dark:border-gray-800 smooth-transition">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{skill.name}</h4>
                    <span className="text-sm font-medium text-orange-600 dark:text-orange-400">{skill.category}</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full"
                    />
                  </div>
                  
                  <div className="text-right">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover group bg-white dark:bg-black border-gray-200 dark:border-gray-800 smooth-transition">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-lg text-gray-900 dark:text-gray-100">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: (index * 0.1) + (skillIndex * 0.02) 
                          }}
                          viewport={{ once: true }}
                          className="skill-tag"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="inline-block p-8 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-800 dark:to-orange-900/20 border-orange-200 dark:border-orange-700 max-w-4xl">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Technology Philosophy
            </h4>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in choosing the right technology for each challenge, focusing on scalability, 
              security, and maintainability. My approach combines deep technical expertise with 
              practical business understanding to deliver solutions that drive measurable impact.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: 'Languages', count: '10+' },
                { label: 'Frameworks', count: '15+' },
                { label: 'Cloud Platforms', count: '5+' },
                { label: 'Years Experience', count: '6+' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}