<?php
namespace T3Dev\T3devcarousel\Controller;

/***************************************************************
 *
 *  Copyright notice
 *
 *  (c) 2016 Dmitry Vasiliev <vaaraha@gmail.com>, T3Studio
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * ItemController
 */
class ItemController extends AbstractController
{

    /**
     * itemRepository
     *
     * @var \T3Dev\T3devcarousel\Domain\Repository\ItemRepository
     * @inject
     */
    protected $itemRepository = NULL;

    /**
     * action list
     *
     * @return void
     */
    public function listAction()
    {
        $cObj = $this->configurationManager->getContentObject();
        $data = $cObj->data;
        $uidTtContent = $data['uid'];

        $items = $this->itemRepository->findByTtContent($uidTtContent);
        //$items = $this->itemRepository->findLimit();
        $this->view->assign('items', $items);
        $this->view->assign('cObjs', $cObj);
        $this->view->assign('uid', $uidTtContent);

        // Get uids of inserted plugins
        $currentPid = $GLOBALS['TSFE']->id;
        $countUids = $this->findUidsByPid($currentPid);
        $this->view->assign('countUids', $countUids);

    }
}
