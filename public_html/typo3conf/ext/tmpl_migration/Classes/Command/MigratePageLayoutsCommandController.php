<?php
namespace T3Dev\TmplMigration\Command;

use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * MigratePageLayoutsCommandController
 */

class MigratePageLayoutsCommandController extends AbstractCommandController
{

    /**
     * Update page layouts command
     *
     * @return void
     */
    public function migratePageLayoutsCommand() {

        // Update standard (Übersichtsseite)
        $this->updatePageLayoutsQuery('`tx_fed_page_controller_action` = \'Devcompany.VostokzapadesignSite->homePage\' ', array('`backend_layout`' => 'pagets__1') );
        $this->updatePageLayoutsQuery('`tx_fed_page_controller_action` = \'Devcompany.VostokzapadesignSite->homePage\' ', array('`backend_layout`' => 'pagets__1') );
        // Update standard on next level
        $this->updatePageLayoutsQuery('`tx_fed_page_controller_action_sub` = \'Devcompany.VostokzapadesignSite->innerPage\' ', array('`backend_layout_next_level`' => 'pagets__2'));
        $this->updatePageLayoutsQuery('`tx_fed_page_controller_action_sub` = \'Devcompany.VostokzapadesignSite->innerPage\' ', array('`backend_layout_next_level`' => 'pagets__2') );

        $msg = " Page layouts are updated ";
        $config = $this->getConfiguration();
        if ($config['enableDevLog']) {
            $this->devLog($msg);
        }

    }


    /**
     * Update page layouts command
     *
     * @return void
     */
    public function updatePageLayoutsQuery($where, $updateArray) {

        $db = $this->getDatabaseConnection();
        $table = '`pages`';
        //$db->exec_UPDATEquery($table, $where, $updateArray, TRUE);

    }

}
