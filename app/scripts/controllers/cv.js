'use strict';

angular.module('amercierApp')
  .controller('CvCtrl', function ($scope) {

    $scope.languages = {
      'php': {
        tag: 'PHP',
        name: 'PHP'
      },
      'html5': {
        tag: 'HTML5',
        name: 'HTML5'
      },
      'js': {
        tag: 'Javascript',
        name: 'Javascript'
      }
    };

    $scope.technologies = {
      'zf2': {
        tag: 'ZF2',
        name: 'Zend Framework 2'
      },
      'bootstrap': {
        tag: 'Bootstrap',
        name: 'Twitter Bootstrap'
      }
    };

    $scope.tools = {
      git: {
        tag: 'Git',
        name: 'Git'
      },
      ant: {
        tag: 'Ant',
        name: 'Ant'
      }
    };

    $scope.projects = [
      {
        name: 'oeco architectes website',
        github: 'https://github.com/amercier/www.oeco-architectes.com',
        demo: 'http://www.oeco-architectes.com',
        languages: ['php', 'html', 'css', 'js', 'md', 'sql'],
        technologies: ['css', 'zf2', 'bootstrap', 'mysql', 'apache2'],
        tools: ['git', 'ant']
      }
    ];

    $scope.sections = [
      {
        title: 'Work experience',
        categories: [
          {
            title: 'Jobs'
          },
          {
            title: 'Freelance projects',
            items: [
              {
                title: 'Oeco Architectes',
                sideNote: 'Website',
                startTime: 2012,
                endTime: 2013,
                note: 'Website for Oeco architecture company',
                technologies: [
                  'HTML',
                  'CSS',
                  'Javascript (jQuery)',
                  'Twitter Bootstrap',
                  'Zend Framework 2',
                  'PHP',
                  'Composer',
                  'SQL (MySQL)',
                  'Git',
                  'Google Analytics',
                  'Sublime Text'
                ],
                source: 'https://github.com/amercier/www.oeco-architectes.com',
                demo: 'http://www.oeco-architectes.com/'
              },
              {
                title: 'APB France',
                sideNote: 'Website',
                startTime: 2008,
                duration: '3 months',
                note: 'Website for Auto-Pièce Burguière car part company (with another developer)',
                technologies: [
                  'HTML',
                  'CSS',
                  'Javascript (Mootools)',
                  'Zend Framework',
                  'PHP',
                  'SQL (MySQL)',
                  'UML',
                  'CVS',
                  'Google Analytics',
                  'Eclipse'
                ],
                demo: 'http://www.apbfrance.com/'
              }
            ]
          },
          {
            title: 'Personal projects',
            items: [
              {
                title: 'amercier-mvn-repo',
                sideNote: 'Maven repository',
                startTime: 2012,
                endTime: 2013,
                note: 'A Maven repository for my plugins',
                technologies: ['Java', 'Maven', 'Git', 'Eclipse'],
                source: 'https://github.com/amercier/amercier-mvn-repo'
              },
              {
                title: 'selenese-maven-plugin',
                sideNote: 'Maven plugin',
                startTime: 2012,
                endTime: 2013,
                note: 'A Maven plugin to use Selenese HTML test suites against a Selenium Grid 2',
                technologies: ['Java', 'Maven', 'UML', 'Git', 'Eclipse'],
                source: 'https://github.com/amercier/selenese-maven-plugin'
              },
              {
                title: 'proxy.amercier.com',
                sideNote: 'Web Service',
                startTime: 2013,
                note: 'A generic PHP proxy to allow cross-site XHR requests from a given list of domains',
                technologies: [
                  'Zend Framework 2',
                  'PHP',
                  'Composer',
                  'Web Services',
                  'REST',
                  'Json',
                  'Markdown',
                  'Git',
                  'Eclipse'
                ],
                source: 'https://github.com/amercier/proxy.amercier.com'
              },
              {
                title: 'Scripts',
                sideNote: 'for Windows, Linux and applications',
                startTime: 2012,
                endTime: 2013,
                note: 'Helper scripts for: Linux (bash), Windows (batch), VMware vCloud Director, MacOS',
                technologies: ['Batch', 'Bash', 'vCloud Director', 'Git', 'Sublime Text'],
                source: 'https://github.com/amercier/scripts'
              },
              {
                title: 'Bootstrap Theme Chooser',
                sideNote: 'Web App',
                startTime: 2012,
                note: 'A tiny web app to preview themes for Twitter Bootstrap framework',
                technologies: ['Less', 'Bootstrap', 'Javascript (jQuery)', 'Markdown', 'Git', 'Eclipse'],
                source: 'https://github.com/amercier/bootstrap-theme-chooser',
                demo: 'http://amercier.github.io/bootstrap-theme-chooser/',
              },
              {
                title: 'jquery-panel',
                sideNote: 'jQuery plugin',
                startTime: 2012,
                note: 'A jQuery plugin to manage collapsable panels',
                technologies: ['Javascript (jQuery)', 'Markdown', 'Git', 'Eclipse'],
                source: 'https://github.com/amercier/jquery-panel'
              },
              {
                title: 'ip.js',
                sideNote: 'Javascript library',
                startTime: 2012,
                note: 'A JavaScript library to manipulate IPv4 addresses and subnets',
                technologies: ['Javascript', 'Markdown', 'Git', 'Eclipse'],
                source: 'https://github.com/amercier/ip.js'
              },
              {
                title: 'string.metrics.js',
                sideNote: 'Javascript library',
                startTime: 2012,
                note: 'A JavaScript library which provides various String metric functions: Levenshtein distance, etc.',
                technologies: ['Javascript', 'Markdown', 'Git', 'Eclipse'],
                source: 'https://github.com/amercier/string.metrics.js'
              },
              {
                title: 'Weagle',
                sideNote: 'PHP Framework on top of Zend Framework',
                startTime: 2011,
                note: 'Facilitate the development of REST web services with Zend Framework',
                technologies: ['Zend Framework 1', 'PHP', 'AJAX', 'CVS', 'Eclipse']
              },
              {
                title: 'Ring',
                sideNote: 'CSS Framework inspired from BlueTrip CSS',
                startTime: 2010,
                endTime: 2011,
                note: 'Cross-browser: IE7+, Firefox/Chrome/Safari/Opera',
                technologies: ['CSS', 'CVS', 'Eclipse']
              },
              {
                title: 'Mootools plugins',
                sideNote: 'Plugins for the Javascript toolkit Mootools',
                startTime: 2010,
                endTime: 2011,
                note: 'Various plugins: Slideshow, Form validation, ...',
                technologies: [
                  'Javascript (Mootools)',
                  'xHTML',
                  'CVS',
                  'Eclipse'
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Education',
        categories: [
          {
            title: 'Internships'
          },
          {
            title: 'Educational projects',
            items: [
              {
                title: 'Editema - Word processor for disabled persons',
                sideNote: 'Master 2',
                startTime: 2007,
                duration: '6 months'
              },
              {
                title: 'Geronimo - Sotware to play the board game Go',
                sideNote: 'Master 1',
                startTime: 2006,
                duration: '6 months'
              }
            ]
          },
          {
            title: 'Diplomas',
            items: [
              {
                title: 'Master 2 in User Experience Design',
                sideNote: 'ENAC (Toulouse, France)',
                startTime: 2006,
                endTime: 2007,
                technologies: [
                  'User-centric design',
                  'Ergonomy',
                  'Web technologies (Javascript, Ajax, Flash/AS2/AS3, HTML)',
                  'Java',
                  'Design Patterns',
                  'UML'
                ]
              },
              {
                title: 'Master 1 in Computer Science',
                sideNote: 'University Paul Sabatier (Toulouse, France)',
                startTime: 2005,
                endTime: 2006,
                technologies: [
                  'Java',
                  'UML',
                  'OpenGL',
                  'Metamodeling'
                ]
              },
              {
                title: 'Licence in Computer Science',
                sideNote: 'University Paul Sabatier (Toulouse, France)',
                startTime: 2004,
                endTime: 2005,
                technologies: [
                  'Java',
                  'UML',
                  'SQL (MySQL)'
                ]
              },
              {
                title: 'DUT in Computer Science',
                sideNote: 'University Institute of Technology (Rodez, France)',
                startTime: 2002,
                endTime: 2004,
                technologies: [
                  'C++',
                  'Java',
                  'UML',
                  'SQL (Oracle)'
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Miscellaneous',
        categories: [
          {
            title: 'Languages',
            type: 'compact',
            items: [
              {
                title: 'French',
                features: ['mother tongue']
              },
              {
                title: 'English',
                features: ['fluent'],
                sideNote: '1 year in Australia, 2 years in Ireland'
              },
              {
                title: 'Spanish',
                features: ['Spoken']
              }
            ]
          },
          {
            title: 'Activitites',
            type: 'compact',
            items: [
              {
                title: 'Sports',
                features: [
                  'Football (13 years in a local club)',
                  'Hiking and mountaineering',
                  'Skiing',
                  'Sydiving'
                ]
              },
              {
                title: 'Associations',
                features: [
                  'Treasurer in a local computer club',
                  'Participation in an association for social reinsertion'
                ]
              },
              {
                title: 'Culture',
                features: [
                  'Travelling',
                  'Music'
                ]
              }
            ]
          }
        ]
      }
    ];
  });
