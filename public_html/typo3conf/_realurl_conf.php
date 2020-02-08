<?php

$GLOBALS['TYPO3_CONF_VARS']['FE']['addRootLineFields'] .= ',tx_realurl_pathsegment';

// Adjust to your needs
//$domain = '10.0.0.30';
$rootPageUid = 1;
$rssFeedPageType = 9818; // pageType of your RSS feed page

$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['realurl']['_DEFAULT'] = array(
    'pagePath' => array(
        'type' => 'user',
        'userFunc' => 'EXT:realurl/class.tx_realurl_advanced.php:&tx_realurl_advanced->main',
        'spaceCharacter' => '-',
        'languageGetVar' => 'L',
        'expireDays' => '3',
        'rootpage_id' => $rootPageUid,
        'firstHitPathCache' => 1
    ),

    'init' => array(
        'enableCHashCache' => 1,
        'respectSimulateStaticURLs' => 0,
        'enableUrlDecodeCache' => 1,
        'enableUrlEncodeCache' => 1,
        //'emptyUrlReturnValue'   =>  '/',
        'appendMissingSlash' => 'ifNotFile,redirect[301]'
    ),
    'fileName' => array(
        'defaultToHTMLsuffixOnPrev' => 0,
        'acceptHTMLsuffix' => 1,
        'index' => array(
            'sitemap.xml' => array(
                'keyValues' => array(
                    'type' => 655,
                )
            )
        )
    ),
    'preVars' => array(
        array(
            'GETvar' => 'L',
            'valueMap' => array(
                'en' => '1',
            ),
            'noMatch' => 'bypass',
        ),
        array(
            'GETvar' => 'no_cache',
            'valueMap' => array(
                'nc' => 1,
            ),
            'noMatch' => 'bypass',
        ),
    ),
    'fixedPostVars' => array(
        'newsDetailConfiguration' => array(
            array(
                'GETvar' => 'tx_news_pi1[action]',
                'valueMap' => array(
                    'detail' => '',
                ),
                'noMatch' => 'bypass'
            ),
            array(
                'GETvar' => 'tx_news_pi1[controller]',
                'valueMap' => array(
                    'News' => '',
                ),
                'noMatch' => 'bypass'
            ),
            array(
                'GETvar' => 'tx_news_pi1[news]',
                'lookUpTable' => array(
                    'table' => 'tx_news_domain_model_news',
                    'id_field' => 'uid',
                    'alias_field' => 'title',
                    'addWhereClause' => ' AND NOT deleted',
                    'useUniqueCache' => 1,
                    'useUniqueCache_conf' => array(
                        'strtolower' => 1,
                        'spaceCharacter' => '-'
                    ),
                    'languageGetVar' => 'L',
                    'languageExceptionUids' => '',
                    'languageField' => 'sys_language_uid',
                    'transOrigPointerField' => 'l10n_parent',
                    'expireDays' => 180,
                )
            )
        ),
        'newsCategoryConfiguration' => array(
            array(
                'GETvar' => 'tx_news_pi1[overwriteDemand][categories]',
                'lookUpTable' => array(
                    'table' => 'sys_category',
                    'id_field' => 'uid',
                    'alias_field' => 'title',
                    'addWhereClause' => ' AND NOT deleted',
                    'useUniqueCache' => 1,
                    'useUniqueCache_conf' => array(
                        'strtolower' => 1,
                        'spaceCharacter' => '-'
                    )
                )
            )
        ),
        'newsTagConfiguration' => array(
            array(
                'GETvar' => 'tx_news_pi1[overwriteDemand][tags]',
                'lookUpTable' => array(
                    'table' => 'tx_news_domain_model_tag',
                    'id_field' => 'uid',
                    'alias_field' => 'title',
                    'addWhereClause' => ' AND NOT deleted',
                    'useUniqueCache' => 1,
                    'useUniqueCache_conf' => array(
                        'strtolower' => 1,
                        'spaceCharacter' => '-'
                    )
                )
            )
        ),
        '8' => 'newsDetailConfiguration',
        '16' => 'newsCategoryConfiguration',
    ),
    'postVarSets' => array(
        '_DEFAULT' => array(
            
       
            'archive' => array (
                '0' => array (
                    'GETvar' => 'tx_ttnews[year]',
                ),
                '1' => array (
                    'GETvar' => 'tx_ttnews[month]',
                    'valueMap' => array (
                        'january' => '01',
                        'february' => '02',
                        'march' => '03',
                        'april' => '04',
                        'may' => '05',
                        'june' => '06',
                        'july' => '07',
                        'august' => '08',
                        'september' => '09',
                        'october' => '10',
                        'november' => '11',
                        'december' => '12',
                    ),
                ),
            ),
            'browse' => array (
                '0' => array (
                    'GETvar' => 'tx_ttnews[pointer]',
                ),
            ),
            'select_category' => array (
                '0' => array (
                    'GETvar' => 'tx_ttnews[cat]',
                ),
            ),
            'article' => array (
                '0' => array (
                    'GETvar' => 'tx_ttnews[tt_news]',
                    'lookUpTable' => array (
                        'table' => 'tt_news',
                        'id_field' => 'uid',
                        'alias_field' => 'title',
                        'addWhereClause' => ' AND NOT deleted',
                        'useUniqueCache' => '1',
                        'useUniqueCache_conf' => array (
                            'strtolower' => '1',
                            'spaceCharacter' => '-',
                        ),
                    ),
                ),
                '1' => array (
                    'GETvar' => 'tx_ttnews[swords]',
                ),
            ),
            

            // News
            'controller' => array(
                array(
                    'GETvar' => 'tx_news_pi1[action]',
                    'noMatch' => 'bypass'
                ),
                array(
                    'GETvar' => 'tx_news_pi1[controller]',
                    'noMatch' => 'bypass'
                )
            ),

            'category' => array(
                array(
                    'GETvar' => 'tx_news_pi1[overwriteDemand][categories]',
                    // 'noMatch' => 'bypass'
                    'lookUpTable' => array(
                        'table' => 'sys_category',
                        'id_field' => 'uid',
                        'alias_field' => 'title',
                        'addWhereClause' => ' AND NOT deleted',
                        'useUniqueCache' => 1,
                        'useUniqueCache_conf' => array(
                            'strtolower' => 1,
                            'spaceCharacter' => '-'
                        )
                    )
                ),
            ),

            'dateFilter' => array(
                array(
                    'GETvar' => 'tx_news_pi1[overwriteDemand][year]',
                ),
                array(
                    'GETvar' => 'tx_news_pi1[overwriteDemand][month]',
                ),
            ),
            'page' => array(
                array(
                    'GETvar' => 'tx_news_pi1[@widget_0][currentPage]',
                ),
            ),


            'fotgot' => array(
                array(
                    'GETvar' => 'tx_felogin_pi1[forgot]',
                ),
            ),


            // Feedback form
            'mail' => array(
                array(
                    'GETvar' => 'tx_powermail_pi1[action]',
                ),
                array(
                    'GETvar' => 'tx_powermail_pi1[controller]',
                    'valueMap' => array (
                        'form' => 'Form',
                    ),
                ),
            ),


        ),
    ),

);