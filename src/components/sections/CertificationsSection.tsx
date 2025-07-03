'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Code, Database, ExternalLink, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const certifications = [
  {
    title: 'SOC 2 Type II Certification Leadership',
    organization: 'Findem (Enterprise Security)',
    description: 'Led comprehensive SOC 2 Type II certification process, establishing enterprise-grade security controls, conducting penetration tests, and implementing ongoing compliance monitoring programs.',
    icon: Shield,
    category: 'Security & Compliance',
    year: '2023',
    skills: ['Security Auditing', 'Compliance Management', 'Risk Assessment', 'Penetration Testing'],
    color: 'from-red-500 to-red-600',
    achievement: 'Enterprise certification achieved'
  },
  {
    title: 'Introduction to R Programming',
    organization: 'Microsoft (edX)',
    description: 'Comprehensive course covering R programming fundamentals, data analysis, statistical computing, and data visualization techniques.',
    icon: Database,
    category: 'Data Science',
    year: '2017',
    certificateId: '2fbeab41639e44fb94e21a87e187e803',
    link: 'https://courses.edx.org/certificates/2fbeab41639e44fb94e21a87e187e803',
    skills: ['R Programming', 'Data Analysis', 'Statistical Computing', 'Data Visualization'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Introduction to Computer Science and Programming Using Python',
    organization: 'MIT (edX)',
    description: 'Fundamental computer science concepts and programming skills using Python, covering algorithms, data structures, and software engineering principles.',
    icon: Code,
    category: 'Programming',
    year: '2016',
    certificateId: '69203f4f217d4f84a87476e0c5c171cb',
    link: 'https://s3.amazonaws.com/verify.edx.org/downloads/4ea0d54bedd340b091b5cf47a7b202de/Certificate.pdf',
    skills: ['Python Programming', 'Computer Science Fundamentals', 'Algorithms', 'Data Structures'],
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Introduction to C++',
    organization: 'edX',
    description: 'Comprehensive C++ programming course covering object-oriented programming concepts, memory management, and advanced programming techniques.',
    icon: Code,
    category: 'Programming',
    year: '2016',
    skills: ['C++ Programming', 'Object-Oriented Programming', 'Memory Management', 'System Programming'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Introduction to Linux',
    organization: 'Linux Foundation (edX)',
    description: 'Comprehensive Linux fundamentals course covering system administration, command line operations, and Linux ecosystem understanding.',
    icon: Code,
    category: 'System Administration',
    year: '2016',
    certificateId: '6db14abf09fa4777a3aeb2354cd8ca64',
    link: 'https://s3.amazonaws.com/verify.edx.org/downloads/9b6c7f2667024974b579ceb846f167fb/Certificate.pdf',
    skills: ['Linux Administration', 'Command Line', 'System Configuration', 'Open Source'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Introduction to Computer Programming',
    organization: 'edX',
    description: 'Foundation course in computer programming covering fundamental programming concepts, logic, and problem-solving methodologies.',
    icon: Code,
    category: 'Programming Fundamentals',
    year: '2015',
    skills: ['Programming Logic', 'Problem Solving', 'Algorithm Design', 'Software Development'],
    color: 'from-indigo-500 to-indigo-600'
  }
]

const certificationStats = [
  { label: 'Professional Certifications', count: '6+', icon: Award },
  { label: 'Programming Languages', count: '5+', icon: Code },
  { label: 'Security Certifications', count: '1', icon: Shield },
  { label: 'Years of Continuous Learning', count: '8+', icon: CheckCircle },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-black smooth-transition">
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
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional milestones, certifications, and continuous learning achievements 
            spanning security compliance, programming, and system administration.
          </p>
        </motion.div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {certificationStats.map((stat, index) => {
            const IconComponent = stat.icon
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 card-hover bg-white dark:bg-black border-gray-200 dark:border-gray-800 smooth-transition">
                  <IconComponent className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover group overflow-hidden bg-white dark:bg-black border-gray-200 dark:border-gray-800 smooth-transition">
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 bg-gradient-to-br ${cert.color} rounded-lg flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                            {cert.category}
                          </div>
                          <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            {cert.year}
                          </div>
                        </div>
                        <CardTitle className="text-lg text-gray-900 dark:text-gray-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                          {cert.title}
                        </CardTitle>
                        <div className="text-sm font-medium text-orange-600 dark:text-orange-400 mt-1">
                          {cert.organization}
                        </div>
                      </div>
                    </div>
                    
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Achievement Highlight */}
                    {cert.achievement && (
                      <div className="p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-sm font-medium text-green-800 dark:text-green-300">
                            {cert.achievement}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Certificate ID */}
                    {cert.certificateId && (
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Certificate ID:</span> {cert.certificateId}
                      </div>
                    )}

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Skills Acquired
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Verification Link */}
                    {cert.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(cert.link, '_blank')}
                        className="w-full mt-2"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Verify Certificate
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="inline-block p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-700 max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Continuous Learning & Professional Development
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              My certification journey reflects a commitment to staying current with evolving technologies 
              and industry best practices. From foundational programming concepts to advanced security compliance, 
              each certification has contributed to building a comprehensive skill set that enables me to tackle 
              complex engineering challenges and lead enterprise-grade initiatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-1">2015-2023</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Learning Timeline</div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-1">6+ Platforms</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Learning Sources</div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-1">Enterprise Impact</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Real-world Application</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}