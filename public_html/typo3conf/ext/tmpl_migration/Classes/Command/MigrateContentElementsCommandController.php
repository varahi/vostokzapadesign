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

        // Update content elements teacher
        $countTeacherCeElement = $this->countUpdatedItems('Fce_Teacher');
        $this->updateTeacherCeElement();

        // Update content elements banner
        $countBannerCeElement = $this->countUpdatedItems('Fce_Banner');
        $this->updateBannerCeElement();

        // Messages in dev log
        $msg = " \n Updated {$countTeacherCeElement} content elements 'Fce_Teacher' \n ";
        $msg .= "Updated {$countBannerCeElement} content elements 'Fce_Banner' \n ";
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
        $uids = $this->getElementUids('Fce_Teacher');
        //$containerName = 'Fce_Teacher';
        //$ceContainerName = 'teacher';

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
                $title = '\'' . addslashes($title) . '\'';
            }

            // Position of person
            if (is_array($flexform) && isset($flexform['data']['teacher']['lDEF']['position']['vDEF'])) {
                $position = $flexform['data']['teacher']['lDEF']['position']['vDEF'];
                $position = '\'' . addslashes($position) . '\'';
            }

            // Bodytext of person
            if (is_array($flexform) && isset($flexform['data']['teacher']['lDEF']['text']['vDEF'])) {
                $bodytext = $flexform['data']['teacher']['lDEF']['text']['vDEF'];
                $bodytext = '\'' . addslashes($bodytext) . '\'';
            }

            $where = "`CType` = 'fluidcontent_content' AND `tx_fed_fcefile` = 'Devcompany.VostokzapadesignSite:Fce_Teacher.html' AND `uid` = $uid";
            $updateArray = [
                '`CType`' => '\'ce_teacher\'',
                '`tx_fed_fcefile`' => ' \'\' ',
                '`header`' =>  $title,
                '`bodytext`' => $bodytext,
                '`textfield`' => $position
            ];

            $db->exec_UPDATEquery(self::TABLE_migrate, $where, $updateArray, TRUE);

        }
    }


    /**
     * Migrate data from content element "Banner Teaser"
     *
     * @return void
     */
    protected function updateBannerCeElement() {

        $db = $this->getDatabaseConnection();
        $uids = $this->getElementUids('Fce_Banner');

        foreach($uids as $key => $uid) {

            $row = $db->exec_SELECTgetSingleRow(
                'pi_flexform',
                'tt_content',
                'uid=' . (int)$uid
            );

            if ($row['pi_flexform'] != '') {
                $flexform = GeneralUtility::xml2array($row['pi_flexform']);
            }

            // Banner title
            if (is_array($flexform) && isset($flexform['data']['banner']['lDEF']['title']['vDEF'])) {
                $title = $flexform['data']['banner']['lDEF']['title']['vDEF'];
                $title = '\'' . addslashes($title) . '\'';
            }

            // Banner text
            if (is_array($flexform) && isset($flexform['data']['banner']['lDEF']['text']['vDEF'])) {
                $bodytext = $flexform['data']['banner']['lDEF']['text']['vDEF'];
                $bodytext = '\'' . addslashes($bodytext) . '\'';
            }

            // Last banner in the line
            if (is_array($flexform) && isset($flexform['data']['banner']['lDEF']['isLast']['vDEF'])) {
                if($flexform['data']['banner']['lDEF']['isLast']['vDEF'] == 1) {
                    $lastLine = '\'1\'';
                } else {
                    $lastLine = '\'0\'';
                }
            }

            $where = "`CType` = 'fluidcontent_content' AND `tx_fed_fcefile` = 'Devcompany.VostokzapadesignSite:Fce_Banner.html' AND `uid` = $uid";
            $updateArray = [
                '`CType`' => '\'ce_banner\'',
                '`tx_fed_fcefile`' => ' \'\' ',
                '`header`' =>  $title,
                '`bodytext`' => $bodytext,
                '`is_last`' => $lastLine
            ];

            $db->exec_UPDATEquery(self::TABLE_migrate, $where, $updateArray, TRUE);

            //\TYPO3\CMS\Core\Utility\DebugUtility::debug($lastLine);

        }

    }

}
