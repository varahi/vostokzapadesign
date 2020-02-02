<?php
defined('TYPO3_MODE') || die('Access denied.');

/*
 *  Default TSConfig
 */
if (TYPO3_MODE == 'FE') {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('
		<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/TsConfig/page.tsconfig">
	');
}

// svg
$icons_svg = [
    // pages: contains-layouts
    'tmpl-backend-layout' => 'EXT:tmpl/Resources/Public/icons/backend/backend_layout.svg'
];


call_user_func(function () {
    if (TYPO3_MODE === 'BE') {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup(
            trim('
                module.tx_form {
                    settings {
                        yamlConfigurations {
                            100 = EXT:tmpl/Configuration/Yaml/Mailform/CustomFormSetup.yaml
                        }
                    }
                }
            ')
        );
    }
});

//change standart locallang for custom
//$GLOBALS['TYPO3_CONF_VARS']['SYS']['locallangXMLOverride']['de']['EXT:sr_feuser_register/Resources/Private/Language/locallang.xlf'][]
//    = 'EXT:tmpl/Resources/Private/Language/Overrides/de.sr_feuser_register_locallang.xlf';
