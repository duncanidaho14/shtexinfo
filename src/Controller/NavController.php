<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Default class
 */
class NavController extends AbstractController
{
    /**
     * @Route("/nav", name="nav")
     */
    public function index(): Response
    {
        $controller_name = 'navController';
        return $this->render('layout/nav.html.twig', compact('controller_name'));
    }
}