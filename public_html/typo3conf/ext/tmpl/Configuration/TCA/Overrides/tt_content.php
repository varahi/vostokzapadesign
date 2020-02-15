<?php
defined('TYPO3_MODE') or die();

// Add new fields to tt_content for common use of custom CTypes
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', [

        'textfield' => [
            'exclude' => 0,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.teaser_teacher.position',
            'config' => [
                'type' => 'text',
                'cols' => 40,
                'rows' => 5,
                'eval' => 'trim'
            ],
        ],
    ]
);

