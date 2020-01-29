<?php
defined('TYPO3_MODE') or die();

$_CEKEY  = 'ce_simple_slider';
$_EXTKEY = 'tmpl';

call_user_func(function () {

    $languageFilePrefix = 'LLL:EXT:fluid_styled_content/Resources/Private/Language/Database.xlf:';
    $customLanguageFilePrefix = 'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:';
    $frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';

    // Add the CType "ce_slider"
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
        'tt_content',
        'CType',
        [
            'LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:simple_gallery_title',
            'ce_slider',
            'content-image'
        ],
        'textmedia',
        'after'
    );

    $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['ce_slider'] = $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['textmedia'];

    // Define what fields to display
    $GLOBALS['TCA']['tt_content']['types']['ce_slider'] = [
        'showitem'         => '
         	--palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
            --palette--;' . $languageFilePrefix . 'tt_content.palette.mediaAdjustments;mediaAdjustments,
            pi_flexform,
            --div--;' . $customLanguageFilePrefix . 'tca.tab.galleryElements, assets
        ',
        'columnsOverrides' => [
            'media' => [
                'label'  => $languageFilePrefix . 'tt_content.media_references',
                'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig('media', [
                    'appearance'    => [
                        'createNewRelationLinkTitle' => $languageFilePrefix . 'tt_content.media_references.addFileReference'
                    ],
                    // custom configuration for displaying fields in the overlay/reference table
                    // behaves the same as the image field.
                    'foreign_types' => $GLOBALS['TCA']['tt_content']['columns']['image']['config']['foreign_types']
                ], $GLOBALS['TYPO3_CONF_VARS']['SYS']['mediafile_ext'])
            ],
        ]
    ];

});

$GLOBALS['TCA']['tt_content']['types'][$_CEKEY]['showitem'] =
	'header'.
	', bodytext'.
	', --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.access'.
	',--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.general;general'.
	', --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.visibility;visibility'.
	', --palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.access;access'.
	', --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.extended';

if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('gridelements')) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tt_content', 'tx_gridelements_container, tx_gridelements_columns', $_CEKEY);
}
	
