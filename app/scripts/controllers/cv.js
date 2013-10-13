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
            title: 'Personal projects'
          },
          {
            title: 'Freelance projects'
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
            title: 'Educational projects'
          },
          {
            title: 'Diplomas',
            items: [
              {
                title: 'Master 2 in User Experience Design',
                location: 'ENAC (Toulouse, France)',
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
                location: 'University Paul Sabatier (Toulouse, France)',
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
                location: 'University Paul Sabatier (Toulouse, France)',
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
                location: 'University Institute of Technology (Rodez, France)',
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
                sideNote: '1 year in Australia, 2 months in New-Zealand, 2 years in Ireland'
              },
              {
                title: 'Spanish',
                features: ['']
              }
            ]
          }
        ]
      }
    ];
  });
