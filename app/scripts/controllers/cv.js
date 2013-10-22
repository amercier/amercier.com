'use strict';

angular.module('amercierApp').controller('CvCtrl', function ($scope) {

  /*
  $scope.filter = '';

  var $scope.filters = [];
  $scope.updateFilters = function() {
    $scope.filters = $scope.filter
      .split(',')
      .map(function(s) { return s.trim(); })
      .filter(function(s) { return s.length > 0; });
  };
  $scope.updateFilters();
  */

  $scope.filters = [];

  $scope.isItemVisible = function(item) {
    if (!item.subItems) {
      return $scope.isSubItemVisible(item);
    }
    // else
    for (var i = 0 ; i < item.subItems.length ; i++) {
      if ($scope.isSubItemVisible(item.subItems[i])) {
        return true;
      }
    }
    return false;
  };

  $scope.isSubItemVisible = function(subItem) {
    if (!subItem.technologies) {
      return true;
    }
    // else

    for (var i = 0 ; i < $scope.filters.length ; i++) {
      if (subItem.technologies.indexOf($scope.filters[i]) === -1) {
        return false;
      }
    }
    return true;
  };

  $scope.isTagVisible = function(tag) {
    return $scope.filters.length === 0 || $scope.filters.indexOf(tag) !== -1;
  };

  $scope.isTagSelected = function(tag) {
    return $scope.filters.length !== 0 && $scope.filters.indexOf(tag) !== -1;
  };

  $scope.sections = [
    {
      title: 'Work experience',
      categories: [
        {
          title: 'Jobs',
          type: 'extended',
          items: [
            {
              title: 'Web Developer',
              sideNote: 'Orange on behalf of Alten (Toulouse, France)',
              note: 'Web Developments for ECV, a Cloud Computing & Virtualization experts team at Orange',
              startTime: 2011,
              endTime: 'current',
              duration: '2 years',
              subItems: [
                {
                  title: 'Orange vCloud Portal',
                  sideNote: 'Web Application',
                  note: 'Web Application build on top of VMware vCloud Director',
                  technologies: [
                    'Javascript',
                    'jQuery',
                    'jQuery UI',
                    'CSS',
                    'HTML5',
                    'D3.js',
                    'SVG',
                    'vCloud Director',
                    'Design Patterns',
                    'Unit Testing',
                    'QUnit'
                  ]
                },
                {
                  title: 'vCloud Javascript SDK',
                  note: 'A Javascript library to use vCloud Director\'s REST API',
                  technologies: ['vCloud Director', 'Javascript', 'jQuery', 'Design Patterns', 'Unit Testing', 'QUnit']
                },
                {
                  title: 'E2C Engine Javascript SDK',
                  note: 'A Javascript library to use E2C Engine\'s (Web Service developed by ECV) REST API',
                  technologies: ['Javascript', 'jQuery', 'Design Patterns', 'Unit Testing', 'QUnit']
                },
                {
                  title: 'Orange vCloud Portal integration testing',
                  note: 'Automated testing of the full IaaS stack developed by E2C',
                  technologies: ['Selenium Grid', 'Maven', 'Jenkins', 'vCloud Director']
                },
                {
                  title: 'ECOCenter Synoptics',
                  sideNote: 'Web Application',
                  note: 'A tiny Web Application that allows generating diagrams to link installation documents with a comprehensive diagram',
                  technologies: ['PlantUML', 'SVG', 'HTML5', 'CSS', 'Javascript']
                },
                {
                  title: 'ECV Web Tools',
                  sideNote: 'Web Application',
                  note: 'A tiny web application to merge other web tools into a single web application',
                  technologies: ['HTML', 'Javascript', 'jQuery', 'CSS']
                }
              ]
            },
            {
              title: 'Web Developer',
              sideNote: 'Micro-SOC Ltd / Jumper Consulting Investements Ltd (Dublin, Ireland)',
              startTime: 2010,
              endTime: 2011,
              duration: '1 ½ year',
              note: 'Web Developments for Micro-SOC / Jumper, an IT Security company based in Dublin.',
              subItems: [
                {
                  title: 'Micro-SOC Box Administration',
                  sideNote: 'Web Application',
                  note: 'Micro-SOC Box is a router installed on clients site that is monitored remotely at Micro-SOC.',
                  technologies: [
                    'Zend Framework',
                    'Javascript',
                    'Mootools',
                    'AJAX',
                    'CSS',
                    'xHTML',
                    'Design Patterns',
                    'Unit Testing',
                    'PHPUnit'
                  ]
                },
                {
                  title: 'Micro-SOC Monitor',
                  sideNote: 'Web Application',
                  note: 'A Web Application to monitor Micro-SOC Boxes activity',
                  technologies: ['Zend Framework', 'PHP', 'Javascript', 'Mootools', 'CSS', 'HTML5', 'Design Patterns']
                },
                {
                  title: 'Developement of Micro-SOC Website',
                  sideNote: 'www.micro-soc.com',
                  technologies: ['Zend Framework', 'PHP', 'Javascript', 'Mootools', 'CSS', 'xHTML', 'Design Patterns']
                },
                {
                  title: 'Maintenance of Jumper Website',
                  sideNote: 'www.jumper.ie',
                  technologies: ['Joomla']
                },
                {
                  title: 'Automation of IT Security reports generation',
                  technologies: ['Bash', 'PHP', 'Javascript', 'Mootools', 'AJAX', 'CSS', 'xHTML']
                },
                {
                  title: 'Customisation of Request Tracker (ticket-tracking system)',
                  sideNote: 'for company specific needs',
                  note: 'Productivity gain for Micro-SOC operators: about +900%',
                  technologies: ['Javascript', 'GreaseMonkey', 'HTML5', 'AJAX', 'Zend Framework', 'PHP'],
                },
                {
                  title: 'SOC Operations (Security Operations Center)',
                  note: 'Micro-SOC boxes ticket tracking. Problem resolution, filtering or escalation',
                  technologies: ['Security', 'SOC']
                },
                {
                  title: 'IT Security Consulting',
                  note: 'Security Bulletins, clients notification',
                  technologies: ['Security']
                }
              ]
            }
          ]
        },
        {
          title: 'Freelance projects',
          type: 'extended',
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
                'Javascript',
                'jQuery',
                'Twitter Bootstrap',
                'Zend Framework 2',
                'PHP',
                'Composer',
                'SQL (MySQL)',
                'Ant',
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
              note: 'Website for Auto-Pièce Burguière car part company (with another developer)',
              technologies: [
                'HTML',
                'CSS',
                'Javascript',
                'Mootools',
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
          title: 'Open Source projects',
          type: 'extended',
          items: [
            {
              title: 'vCloud Patched PHP SDK',
              sideNote: 'PHP Library',
              startTime: 2013,
              note: 'Patched version of the official VMware vCloud PHP SDK',
              technologies: [
                'PHP',
                'Composer',
                'Make',
                'Markdown',
                'Git',
                'Sublime Text'
              ],
              source: 'https://github.com/amercier/vmware-vcloud-sdk-php-patched'
            },
            {
              title: 'PHP Cli Helpers',
              sideNote: 'PHP Library',
              startTime: 2013,
              note: 'Utility library for PHP Cli',
              technologies: [
                'PHP',
                'Composer',
                'Unit Testing',
                'PHPUnit',
                'Travis CI',
                'Coveralls',
                'VersionEye',
                'Make',
                'Markdown',
                'Git',
                'Sublime Text'
              ],
              source: 'https://github.com/amercier/php-cli-helpers',
              demo: 'http://amercier.github.io/php-cli-helpers/'
            },
            {
              title: 'inheritance.js',
              sideNote: 'Javascript Library',
              startTime: 2013,
              note: 'Prototypal inheritance utility library, pure-javascript, available as an AMD module',
              technologies: [
                'Javascript',
                'AMD',
                'vCloud Director',
                'Grunt',
                'Bower',
                'Unit Testing',
                'QUnit',
                'Travis CI',
                'Make',
                'Markdown',
                'PlantUML',
                'Git',
                'Sublime Text'
              ],
              source: 'https://github.com/amercier/inheritance.js',
              demo: 'http://amercier.github.io/inheritance.js/'
            },
            {
              title: 'vcloud.js',
              sideNote: 'Javascript Library',
              startTime: 2012,
              endTime: 2013,
              note: 'VMware vCloud API Javascript SDK',
              technologies: [
                'Javascript',
                'vCloud Director',
                'Grunt',
                'Bower',
                'Unit Testing',
                'QUnit',
                'Travis CI',
                'Coveralls',
                'Make',
                'Markdown',
                'Git',
                'Sublime Text'
              ],
              source: 'https://github.com/amercier/vcloud.js',
              demo: 'http://amercier.github.io/vcloud.js/'
            },
            {
              title: 'Sandbox',
              startTime: 2012,
              endTime: 2013,
              note: 'Experimentations & proof of concepts',
              technologies: [
                'HTML5',
                'Twitter Bootstrap',
                'Javascript',
                'AMD',
                'AngularJS',
                'jQuery',
                'jQuery UI',
                'Polymer',
                'Promises',
                'Unit Testing',
                'Karma',
                'QUnit',
                'PHP',
                'Zend Framework 2',
                'REST',
                'Git',
                'Sublime Text'
              ],
              source: 'https://github.com/amercier/sandbox',
              demo: 'http://amercier.github.io/sandbox/'
            },
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
              technologies: ['Java', 'Maven', 'Selenium', 'UML', 'Git', 'Eclipse'],
              source: 'https://github.com/amercier/selenese-maven-plugin'
            },
            {
              title: 'proxy.amercier.com',
              sideNote: 'Web Service',
              startTime: 2013,
              note: 'A generic PHP proxy to allow cross-site AJAX requests from a given list of domains',
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
              sideNote: 'Web Application',
              startTime: 2012,
              note: 'A tiny web app to preview themes for Twitter Bootstrap framework',
              technologies: ['Less', 'Twitter Bootstrap', 'Javascript', 'jQuery', 'Markdown', 'Git', 'Eclipse'],
              source: 'https://github.com/amercier/bootstrap-theme-chooser',
              demo: 'http://amercier.github.io/bootstrap-theme-chooser/',
            },
            {
              title: 'jquery-panel',
              sideNote: 'jQuery plugin',
              startTime: 2012,
              note: 'A jQuery plugin to manage collapsable panels',
              technologies: ['Javascript', 'jQuery', 'Markdown', 'Git', 'Eclipse'],
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
              technologies: ['Zend Framework', 'PHP', 'AJAX', 'CVS', 'Eclipse']
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
              technologies: ['Javascript', 'Mootools', 'xHTML', 'CVS', 'Eclipse']
            }
          ]
        }
      ]
    },
    {
      title: 'Education',
      categories: [
        {
          title: 'Internships',
          type: 'extended',
          items: [
            {
              title: 'Topcased - UX improvement',
              sideNote: 'Anyware Technologies (Labège, France)',
              note: 'A integrated system/software engineering toolkit. It is based on Eclipse Platform and available as an Eclipse plugin or RPC bundle',
              startTime: 2007,
              duration: '6 months',
              technologies: ['Java', 'UML', 'ECore', 'Metamodeling', 'Eclipse Platform', 'CVS'],
              website: 'http://www.topcased.org/'
            },
            {
              title: 'Intranet Website - Complete rewrite',
              sideNote: '3A Engineering (Rodez, France)',
              note: 'An Intranet website to manage customers, employees tasks and calendar',
              startTime: 2004,
              duration: '10 weeks',
              technologies: ['Javascript', 'HTML4', 'CSS', 'ASP', 'SQL (SQL server)', 'Microsoft IIS']
            }
          ]
        },
        {
          title: 'Educational projects',
          type: 'extended',
          items: [
            {
              title: 'Editema',
              sideNote: 'Master 2',
              note: 'Word processor for disabled persons',
              startTime: 2007,
              duration: '6 months',
              technologies: [
                'User-centric design',
                'Ergonomy',
                'Java',
                'Flash',
                'UML',
                'CVS'
              ]
            },
            {
              title: 'Geronimo',
              sideNote: 'Master 1',
              note: 'Software to play Go (board Game)',
              startTime: 2006,
              duration: '6 months',
              technologies: ['Java', 'SWT', 'UML', 'CVS']
            },
            {
              title: 'C- Compiler',
              sideNote: 'Master 1',
              startTime: 2005,
              duration: '1 month',
              note: 'A program that compiles C- (a subset of C) into Java bytecode',
              technologies: ['Yacc', 'Lex', 'C', 'Java', 'Bash']
            }
          ]
        },
        {
          title: 'Diplomas',
          type: 'extended',
          items: [
            {
              title: 'Master 2 in User Experience Design',
              sideNote: 'ENAC (Toulouse, France)',
              startTime: 2006,
              endTime: 2007,
              technologies: [
                'User-centric design',
                'Ergonomy',
                'Javascript',
                'AJAX',
                'Flash',
                'xHTML',
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
              technologies: ['Java', 'UML', 'OpenGL', 'Metamodeling']
            },
            {
              title: 'Licence in Computer Science',
              sideNote: 'University Paul Sabatier (Toulouse, France)',
              startTime: 2004,
              endTime: 2005,
              technologies: ['Java', 'UML', 'SQL (MySQL)']
            },
            {
              title: 'DUT in Computer Science',
              sideNote: 'University Institute of Technology (Rodez, France)',
              startTime: 2002,
              endTime: 2004,
              technologies: ['C++', 'Java', 'UML', 'SQL (Oracle)']
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
          title: 'Activities',
          type: 'compact',
          items: [
            {
              title: 'Sports',
              features: [
                'Football (13 years in a local club)',
                'Hiking and mountaineering',
                'Skiing',
                'Skydiving'
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

  $scope.allFilters = [];
  $scope.sections.forEach(function(section) {
    section.categories.forEach(function(category) {
      category.items.forEach(function(item) {
        item.technologies && item.technologies.forEach(function(technology) {
          if ($scope.allFilters.indexOf(technology) === -1) {
            $scope.allFilters.push(technology);
          }
        });
        item.subItems && item.subItems.forEach(function(subItem) {
          subItem.technologies && subItem.technologies.forEach(function(technology) {
            if ($scope.allFilters.indexOf(technology) === -1) {
              $scope.allFilters.push(technology);
            }
          });
        });
      });
    });
  });

  $scope.getAllFilters = function() {
    return $scope.allFilters;
  }

  /*
  var tagApi = jQuery('[name=filter-selector]').tagsManager({
    //prefilled: [],
    //hiddenTagListName: 'filter-hidden',
    onlyTagList: true//,
    //tagClass: 'label label-success',
    //tagsContainer: '.filter-container'
  });

  jQuery('[name=filter-selector]').typeahead({
    name: 'filters',
    local: allFilters,
  }).on('typeahead:selected', function (e, d) {
    tagApi.tagsManager('pushTag', d.value);
  });

  jQuery('[name=filter-hidden]').change(function(e) {
    $scope.filter = e.target.value;
    $scope.updateFilters();
    $scope.$apply();
  });
  */

});
