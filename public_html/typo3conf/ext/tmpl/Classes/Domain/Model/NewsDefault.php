<?php
namespace T3Dev\Tmpl\Domain\Model;

class NewsDefault
    extends \GeorgRinger\News\Domain\Model\News
{
    /**
     * inAction
     *
     * @var bool
     */
    protected $inAction = false;


    /**
     * Returns the inAction
     *
     * @return bool $inAction
     */
    public function getInAction()
    {
        return $this->inAction;
    }

    /**
     * Sets the inAction
     *
     * @param bool $inAction
     * @return void
     */
    public function setInAction($inAction)
    {
        $this->inAction = $inAction;
    }

    /**
     * Returns the boolean state of inAction
     *
     * @return bool
     */
    public function isInAction()
    {
        return $this->inAction;
    }

}

