<?php
defined('TYPO3_MODE') or die();

use \TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

// Define field
$tempColumn = [
    'cropscaling' => [
        'exclude' => 0,
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.cropscalling',
        'config' => [
            'type' => 'check',
            'default' => 0,
            'items' => [
                ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.cropscalling.I.0', ''],
            ]
        ]
    ],
    'cropscaling_ratio' => [
        'exclude' => 1,
        'label' => 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.cropscaling_ratio',
        'config' => [
            'type' => 'select',
            'renderType' => 'selectSingle',
            'default' => 0,
            'items' => [
                ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.cropscaling_ratio.I.0', '0'],
                ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.cropscaling_ratio.I.1', '1'],
                ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.cropscaling_ratio.I.2', '16/9'],
                ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.cropscaling_ratio.I.3', '4/3'],
                ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.cropscaling_ratio.I.4', '9/16'],
                ['LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:tt_content.cropscaling_ratio.I.5', '3/4'],
            ]
        ]
    ],

];

// Add field to tt_content
ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumn);

if (isset($GLOBALS['TCA']['tt_content']['palettes']['image_settings'])) {
    $GLOBALS['TCA']['tt_content']['palettes']['image_settings']['showitem'] = str_replace(', imageborder', ', cropscaling, cropscaling_ratio, cropscaling_orient, imageborder', $GLOBALS['TCA']['tt_content']['palettes']['image_settings']['showitem']);
} else {
    $GLOBALS['TCA']['tt_content']['palettes']['mediaAdjustments']['showitem'] .= ',--linebreak--, cropscaling, cropscaling_ratio, cropscaling_orient';
}
