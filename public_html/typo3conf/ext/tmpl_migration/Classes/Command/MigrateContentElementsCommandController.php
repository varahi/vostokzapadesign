<?php
namespace  T3Dev\TmplMigration\Command;

use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * MigrateContentElementsCommandController
 */

class MigrateContentElementsCommandController extends AbstractCommandController
{

    /**
     * Migrate content elements command
     *
     * @return void
     */
    public function migrateContentElementsCommand() {
        $countTeacherCeElement = $this->countUpdatedItems('Fce_Teacher');
        $this->updateTeacherCeElement();

        $msg = " \n Updated {$countTeacherCeElement} content elements 'Fce_Teacher' \n ";

        $config = $this->getConfiguration();
        if ($config['enableDevLog']) {
            $this->devLog($msg);
        }
    }

    /**
     * Migrate data from content element "Teacher Teaser"
     *
     * @return void
     */
    protected function updateTeacherCeElement() {

        $db = $this->getDatabaseConnection();
        $uids = $this->getElementUids('Devcompany.VostokzapadesignSite:Fce_Teacher.html');
        $containerName = 'Fce_Teacher';
        $ceContainerName = 'teaser';

        foreach($uids as $key => $uid) {

            $row = $db->exec_SELECTgetSingleRow(
                'pi_flexform',
                'tt_content',
                'uid=' . (int) $uid
            );

            if($row['pi_flexform'] !='') {
                $flexform = GeneralUtility::xml2array($row['pi_flexform']);
            }

            // Full Name of Person
            if (is_array($flexform) && isset($flexform['data']['teacher']['lDEF']['title']['vDEF'])) {
                $title = $flexform['data']['teacher']['lDEF']['title']['vDEF'];
            } else {
                $title = '';
            }

            // Position of person
            if (is_array($flexform) && isset($flexform['data']['teacher']['lDEF']['position']['vDEF'])) {
                $position = $flexform['data']['teacher']['lDEF']['position']['vDEF'];
            } else {
                $position = '';
            }

            // Bodytext of person
            if (is_array($flexform) && isset($flexform['data']['teacher']['lDEF']['text']['vDEF'])) {
                $bodytext = $flexform['data']['teacher']['lDEF']['text']['vDEF'];
            } else {
                $bodytext = '';
            }

            $where = "CType = 'fluidcontent_content' AND tx_fed_fcefile = 'Devcompany.VostokzapadesignSite:$containerName.html' AND uid = $uid";
            $updateArray = array('CType' => 'ce_' . $ceContainerName, 'tx_fed_fcefile' => '',
                'header' => $title, 'bodytext' => $bodytext, 'textfield' => $position);

            $db->exec_UPDATEquery(self::TABLE_migrate, $where, $updateArray, TRUE);

            //\TYPO3\CMS\Core\Utility\DebugUtility::debug($position);

        }



    }

}
