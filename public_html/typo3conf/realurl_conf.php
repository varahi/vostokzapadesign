<?php

$GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'] .= ',tx_realurl_pathsegment';

// Adjust to your needs
$domain = 'www.example.com';
$rootPageUid = 1;
$rssFeedPageType = 9818; // pageType of your RSS feed page

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl'][$domain] = [
    'pagePath' => [
        'type' => 'user',
        'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
        'spaceCharacter' => '-',
        'languageGetVar' => 'L',
        'expireDays' => '3',
        'rootpage_id' => $rootPageUid,
        'firstHitPathCache' => 1
    ],
    'init' => [
        'enableCHashCache' => true,
        'respectSimulateStaticURLs' => 0,
        'appendMissingSlash' => 'ifNotFile,redirect',
        'adminJumpToBackend' => true,
        'enableUrlDecodeCache' => true,
        'enableUrlEncodeCache' => true,
        'emptyUrlReturnValue' => '/',
    ],
    'fileName' => [
        'defaultToHTMLsuffixOnPrev' => 0,
        'acceptHTMLsuffix' => 1,
        'index' => [
            'feed.rss' => [
                'keyValues' => [
                    'type' => $rssFeedPageType,
                ]
            ]
        ]
    ],
    'preVars' => [
        [
            'GETvar' => 'L',
            'valueMap' => [
                'en' => '1',
            ],
            'noMatch' => 'bypass',
        ],
    ],
    'fixedPostVars' => [
        'newsDetailConfiguration' => [
            [
                'GETvar' => 'tx_news_pi1[action]',
                'valueMap' => [
                    '' => 'detail',
                ],
                'noMatch' => 'bypass'
            ],
            [
                'GETvar' => 'tx_news_pi1[controller]',
                'valueMap' => [
                    '' => 'News',
                ],
                'noMatch' => 'bypass'
            ],
            [
                'GETvar' => 'tx_news_pi1[news]',
                'lookUpTable' => [
                    'table' => 'tx_news_domain_model_news',
                    'id_field' => 'uid',
                    'alias_field' => 'IF(path_segment!="",path_segment,title)',
                    'addWhereClause' => ' AND NOT deleted',
                    'useUniqueCache' => 1,
                    'languageGetVar' => 'L',
                    'languageExceptionUids' => '',
                    'languageField' => 'sys_language_uid',
                    'transOrigPointerField' => 'l10n_parent',
                    'expireDays' => 180,
                    'enable404forInvalidAlias' => true
                ]
            ]
        ],
        'newsCategoryConfiguration' => [
            [
                'GETvar' => 'tx_news_pi1[overwriteDemand][categories]',
                'lookUpTable' => [
                    'table' => 'sys_category',
                    'id_field' => 'uid',
                    'alias_field' => 'title',
                    'addWhereClause' => ' AND NOT deleted',
                    'useUniqueCache' => 1,
                    'enable404forInvalidAlias' => true
                ]
            ]
        ],
        'newsTagConfiguration' => [
            [
                'GETvar' => 'tx_news_pi1[overwriteDemand][tags]',
                'lookUpTable' => [
                    'table' => 'tx_news_domain_model_tag',
                    'id_field' => 'uid',
                    'alias_field' => 'title',
                    'addWhereClause' => ' AND NOT deleted',
                    'useUniqueCache' => 1,
                    'enable404forInvalidAlias' => true
                ]
            ]
        ],
        '434' => 'newsDetailConfiguration',
        //'701' => 'newsDetailConfiguration', // For additional detail pages, add their uid as well
        //'71' => 'newsTagConfiguration',
        //'72' => 'newsCategoryConfiguration',
    ],
    'postVarSets' => [
        '_DEFAULT' => [
            'controller' => [
                [
                    'GETvar' => 'tx_news_pi1[action]',
                    'noMatch' => 'bypass'
                ],
                [
                    'GETvar' => 'tx_news_pi1[controller]',
                    'noMatch' => 'bypass'
                ]
            ],

            'dateFilter' => [
                [
                    'GETvar' => 'tx_news_pi1[overwriteDemand][year]',
                ],
                [
                    'GETvar' => 'tx_news_pi1[overwriteDemand][month]',
                ],
            ],
            'page' => [
                [
                    'GETvar' => 'tx_news_pi1[@widget_0][currentPage]',
                ],
            ],
        ],
    ],

];
