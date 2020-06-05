<?php
defined('TYPO3_MODE') or die();

use \TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

// Define field
$tempColumn = array(

    'spaceBefore' => array(
        'exclude' => true,
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.spaceBefore',
        'config' => array(
            'type' => 'input',
            'size' => 4,
            'eval' => 'int'
        )
    ),
    'spaceAfter' => array(
        'exclude' => true,
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.spaceAfter',
        'config' => array(
            'type' => 'input',
            'size' => 4,
            'eval' => 'int'
        )
    ),

);
// Add field to tt_content
ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    $tempColumn
);

ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'frames',
    '--linebreak--, spaceBefore',
    'after:space_after_class'
);

ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'frames',
    'spaceAfter',
    'after:spaceBefore'
);
