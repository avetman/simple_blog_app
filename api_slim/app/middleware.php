<?php

declare(strict_types=1);

use App\Application\Middleware\SessionMiddleware;

use Slim\App;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface as RequestHandler;


return function (App $app) {
    $app->add(SessionMiddleware::class);
  

    return function (Request $request, RequestHandler $handler) {
        $response = $handler->handle($request)
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');

        if ($request->getMethod() === 'OPTIONS') {
            return $response->withStatus(200);
        }

        return $response;
    };
};
