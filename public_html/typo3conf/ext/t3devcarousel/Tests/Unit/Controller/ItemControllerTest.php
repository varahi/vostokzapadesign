<?php
namespace T3Dev\T3devcarousel\Tests\Unit\Controller;
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2016 Dmitry Vasiliev <vaaraha@gmail.com>, T3Studio
 *  			
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
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
 * Test case for class T3Dev\T3devcarousel\Controller\ItemController.
 *
 * @author Dmitry Vasiliev <vaaraha@gmail.com>
 */
class ItemControllerTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{

	/**
	 * @var \T3Dev\T3devcarousel\Controller\ItemController
	 */
	protected $subject = NULL;

	public function setUp()
	{
		$this->subject = $this->getMock('T3Dev\\T3devcarousel\\Controller\\ItemController', array('redirect', 'forward', 'addFlashMessage'), array(), '', FALSE);
	}

	public function tearDown()
	{
		unset($this->subject);
	}

	/**
	 * @test
	 */
	public function listActionFetchesAllItemsFromRepositoryAndAssignsThemToView()
	{

		$allItems = $this->getMock('TYPO3\\CMS\\Extbase\\Persistence\\ObjectStorage', array(), array(), '', FALSE);

		$itemRepository = $this->getMock('T3Dev\\T3devcarousel\\Domain\\Repository\\ItemRepository', array('findAll'), array(), '', FALSE);
		$itemRepository->expects($this->once())->method('findAll')->will($this->returnValue($allItems));
		$this->inject($this->subject, 'itemRepository', $itemRepository);

		$view = $this->getMock('TYPO3\\CMS\\Extbase\\Mvc\\View\\ViewInterface');
		$view->expects($this->once())->method('assign')->with('items', $allItems);
		$this->inject($this->subject, 'view', $view);

		$this->subject->listAction();
	}
}
