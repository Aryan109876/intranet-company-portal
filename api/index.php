<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "config/database.php";
require_once "config/core.php";

// Get database connection
$database = new Database();
$db = $database->getConnection();

// Get the requested endpoint
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$endpoints = explode('/', trim($request_uri, '/'));

// Remove 'api' from the beginning if present
if ($endpoints[0] === 'api') {
    array_shift($endpoints);
}

// Route the request
$controller = $endpoints[0] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

switch ($controller) {
    case 'auth':
        require_once "controllers/AuthController.php";
        $auth = new AuthController($db);
        
        if ($method === 'POST') {
            $auth->login();
        }
        break;

    case 'documents':
        require_once "controllers/DocumentController.php";
        $doc = new DocumentController($db);
        
        if ($method === 'GET') {
            if (isset($endpoints[1])) {
                $doc->getOne($endpoints[1]);
            } else {
                $doc->getAll();
            }
        } elseif ($method === 'POST') {
            $doc->create();
        } elseif ($method === 'PUT') {
            $doc->update();
        } elseif ($method === 'DELETE') {
            $doc->delete();
        }
        break;

    case 'projects':
        require_once "controllers/ProjectController.php";
        $project = new ProjectController($db);
        
        if ($method === 'GET') {
            if (isset($endpoints[1])) {
                $project->getOne($endpoints[1]);
            } else {
                $project->getAll();
            }
        } elseif ($method === 'POST') {
            $project->create();
        } elseif ($method === 'PUT') {
            $project->update();
        } elseif ($method === 'DELETE') {
            $project->delete();
        }
        break;

    case 'announcements':
        require_once "controllers/AnnouncementController.php";
        $announcement = new AnnouncementController($db);
        
        if ($method === 'GET') {
            if (isset($endpoints[1])) {
                $announcement->getOne($endpoints[1]);
            } else {
                $announcement->getAll();
            }
        } elseif ($method === 'POST') {
            $announcement->create();
        } elseif ($method === 'PUT') {
            $announcement->update();
        } elseif ($method === 'DELETE') {
            $announcement->delete();
        }
        break;

    default:
        http_response_code(404);
        echo json_encode(["message" => "Endpoint not found"]);
        break;
}
?>