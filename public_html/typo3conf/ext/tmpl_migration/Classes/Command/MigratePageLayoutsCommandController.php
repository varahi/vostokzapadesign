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

        // Update home page
        $this->updatePageLayoutsQuery(' `tx_fed_page_controller_action` =  \'Devcompany.VostokzapadesignSite->homePage\' ', array('`backend_layout`' => ' \'pagets__1\' '));
        $this->updatePageLayoutsQuery(' `tx_fed_page_controller_action_sub` =  \'Devcompany.VostokzapadesignSite->homePage\' ', array('`backend_layout_next_level`' => ' \'pagets__1\' '));

        // Update inner page
        $this->updatePageLayoutsQuery(' `tx_fed_page_controller_action` =  \'Devcompany.VostokzapadesignSite->innerPage\' ', array('`backend_layout`' => ' \'pagets__2\' '));
        $this->updatePageLayoutsQuery(' `tx_fed_page_controller_action_sub` =  \'Devcompany.VostokzapadesignSite->innerPage\' ', array('`backend_layout_next_level`' => ' \'pagets__2\' '));

        // Set default inner page
        $this->updatePageLayoutsQuery(' `backend_layout` =  \'fluidpages__fluidpages\' ', array('`backend_layout`' => ' \'pagets__2\' '));
        $this->updatePageLayoutsQuery(' `backend_layout_next_level` =  \'fluidpages__fluidpages\' ', array('`backend_layout_next_level`' => ' \'pagets__2\' '));

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
        $db->exec_UPDATEquery($table, $where, $updateArray, TRUE);

    }

}
