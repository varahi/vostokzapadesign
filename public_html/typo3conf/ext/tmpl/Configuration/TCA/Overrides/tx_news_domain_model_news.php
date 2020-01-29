<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

$newsColumns = [
    'in_action' => [
        'exclude' => true,
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:news.in_action',
        'config' => [
            'type' => 'check',
            'items' => [
                '1' => [
                    '0' => 'LLL:EXT:lang/Resources/Private/Language/locallang_core.xlf:labels.enabled'
                ]
            ],
            'default' => 0,
        ]
    ],
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns("tx_news_domain_model_news",$newsColumns,1);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'tx_news_domain_model_news', 'in_action', '', 'after:istopnews'
);
