<?php
defined('TYPO3_MODE') or die();

use \TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

// Define field
$tempColumn = [
    'tx_nwtimagecrop_cropscaling' => [
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
];

// Add field to tt_content
ExtensionManagementUtility::addTCAcolumns('tt_content', $tempColumn);

if (isset($GLOBALS['TCA']['tt_content']['palettes']['image_settings'])) {
    $GLOBALS['TCA']['tt_content']['palettes']['image_settings']['showitem'] = str_replace(', imageborder', ', tx_nwtimagecrop_cropscaling, tx_nwtimagecrop_cropscaling_ratio, tx_nwtimagecrop_cropscaling_orient, imageborder', $GLOBALS['TCA']['tt_content']['palettes']['image_settings']['showitem']);
} else {
    $GLOBALS['TCA']['tt_content']['palettes']['mediaAdjustments']['showitem'] .= ',--linebreak--, tx_nwtimagecrop_cropscaling, tx_nwtimagecrop_cropscaling_ratio, tx_nwtimagecrop_cropscaling_orient';
}
