<?php
namespace T3Dev\T3devcarousel\Controller;

 /**
 * AbstractController
 */
 abstract class AbstractController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {


     protected function findUidsByPid($pageId) {
         $sysLanguageUid = $GLOBALS['TSFE']->sys_language_uid;

         $where = "pages.uid = $pageId
                AND pages.uid = tt_content.pid AND pages.deleted = 0 AND pages.hidden = 0 
                AND tt_content.deleted = 0 AND tt_content.hidden = 0 
                AND CType like '%t3devcarousel_t3devcarousel%' 
                AND sys_language_uid = $sysLanguageUid ";

         $query = $GLOBALS['TYPO3_DB']->SELECTquery('tt_content.uid', 'tt_content, pages', $where);
         $res = $GLOBALS['TYPO3_DB']->sql_query($query);
         $uidsArr = [];
         if ($res)
             while ($uidRow = $GLOBALS['TYPO3_DB']->sql_fetch_assoc($res)) {
            $uidsArr[] = $uidRow['uid'];
         }

         $GLOBALS['TYPO3_DB']->sql_free_result($res);
         //$uids = implode(" ',' ", $uidsArr);
         //\TYPO3\CMS\Core\Utility\DebugUtility::debug($uidsArr);
         return $uidsArr;
     }

     protected function countUidsByPid($pageId) {
         $sysLanguageUid = $GLOBALS['TSFE']->sys_language_uid;

         $where = "pages.uid = $pageId
                AND pages.uid = tt_content.pid AND pages.deleted = 0 AND pages.hidden = 0 
                AND tt_content.deleted = 0 AND tt_content.hidden = 0 
                AND CType like '%t3devcarousel_t3devcarousel%' 
                AND sys_language_uid = $sysLanguageUid ";

         $query = $GLOBALS['TYPO3_DB']->SELECTquery('tt_content.uid', 'tt_content, pages', $where);
         $res = $GLOBALS['TYPO3_DB']->sql_query($query);
         $count = $GLOBALS['TYPO3_DB']->sql_num_rows($res);

         $GLOBALS['TYPO3_DB']->sql_free_result($res);
         return $count;
     }

 }
