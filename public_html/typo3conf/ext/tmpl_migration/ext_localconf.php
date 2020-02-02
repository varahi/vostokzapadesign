<?php
defined('TYPO3_MODE') || die('Access denied.');

if (TYPO3_MODE === 'BE') {
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['extbase']['commandControllers']['DenicMigration-MigratePageLayoutsCommandController'] =
        \T3Dev\TmplMigration\Command\MigratePageLayoutsCommandController::class;

    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['extbase']['commandControllers']['DenicMigration-MigrateContainersCommandController'] =
        \T3Dev\TmplMigration\Command\MigrateContainersCommandController::class;

    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['extbase']['commandControllers']['DenicMigration-MigrateContentElementsCommandController'] =
        \T3Dev\TmplMigration\Command\MigrateContentElementsCommandController::class;

}
