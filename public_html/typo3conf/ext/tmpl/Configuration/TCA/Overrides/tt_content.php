<?php
defined('TYPO3_MODE') or die();

// Add new fields to tt_content for common use of custom CTypes
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', [

        'container_type' => [
            'exclude' => true,
            'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.top_container_type',
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'items' => array(
                    array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.top_container_type_oil', 'oil'),
                    array('LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.top_container_type_map', 'map'),
                ),
                'size' => 1,
                'maxitems' => 1,
                'eval' => ''
            ],
        ],

      /*
    'image_width' => [
        'exclude' => true,
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.image_width',
        'config' => [
            'type' => 'input',
            'size' => 4,
            'eval' => 'int'
        ]
    ],
    'image_height' => [
        'exclude' => true,
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.image_height',
        'config' => [
            'type' => 'input',
            'size' => 4,
            'eval' => 'int'
        ]
    ],
    */
]

);
