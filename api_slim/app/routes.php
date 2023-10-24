<?php

declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

return function (App $app) {
    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        // CORS Pre-Flight OPTIONS Request Handler
        return $response;
    });

    $app->get('/posts', function (Request $request, Response $response) {
        $db = $this->get('db');

        try {
            $stmt = $db->prepare("SELECT * FROM posts");
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $response->withJson($result);
        } catch (PDOException $e) {
            return $response->withJson(['error' => $e->getMessage()], 500);
        }
    });
    $app->get('/posts/{id}', function (Request $request, Response $response, $args) {
        $db = $this->get('db');
        $id = $args['id'];

        try {
            $stmt = $db->prepare("SELECT * FROM posts WHERE id = ?");
            $stmt->execute([$id]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if (!$result) {
                return $response->withJson(['error' => 'Post not found'], 404);
            }

            return $response->withJson($result);
        } catch (PDOException $e) {
            return $response->withJson(['error' => $e->getMessage()], 500);
        }
    });
    $app->post('/posts/new', function (Request $request, Response $response) {
        $db = $this->get('db');
        $data = $request->getParsedBody();
        print_r($db);
        $title = $data['title'];
        $category = $data['category'];
        $content = $data['content'];

        try {
            $stmt = $db->prepare("INSERT INTO posts (title, categories, content) VALUES (?, ?, ?)");
            $stmt->execute([$title, $category, $content]);

            return $response->withJson(['message' => 'Post created successfully',$data]);
        } catch (PDOException $e) {
            return $response->withJson(['error' => $e->getMessage()], 500);
        }
    });

    $app->delete('/posts/{id}', function (Request $request, Response $response, $args) {
        $db = $this->get('db');
        $id = $args['id'];

        try {
            $stmt = $db->prepare("DELETE FROM posts WHERE id = ?");
            $stmt->execute([$id]);
    
            return $response->withJson(['message' => 'Post deleted successfully']);
        } catch (PDOException $e) {
            return $response->withJson(['error' => $e->getMessage()], 500);
        }
    });

 
};
