<?php
class User {
    private $conn;
    private $table_name = "users";

    public $id;
    public $name;
    public $email;
    public $password;
    public $role;
    public $department;
    public $avatar;
    public $join_date;
    public $created_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function create() {
        $query = "INSERT INTO " . $this->table_name . "
                SET
                    name = :name,
                    email = :email,
                    password = :password,
                    role = :role,
                    department = :department,
                    avatar = :avatar,
                    join_date = :join_date";

        $stmt = $this->conn->prepare($query);

        // Sanitize inputs
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->role = htmlspecialchars(strip_tags($this->role));
        $this->department = htmlspecialchars(strip_tags($this->department));
        $this->avatar = htmlspecialchars(strip_tags($this->avatar));

        // Hash password
        $password_hash = password_hash($this->password, PASSWORD_BCRYPT);

        // Bind values
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":password", $password_hash);
        $stmt->bindParam(":role", $this->role);
        $stmt->bindParam(":department", $this->department);
        $stmt->bindParam(":avatar", $this->avatar);
        $stmt->bindParam(":join_date", $this->join_date);

        if($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function login() {
        $query = "SELECT id, name, email, password, role, department, avatar, join_date
                FROM " . $this->table_name . "
                WHERE email = ?
                LIMIT 0,1";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->email);
        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($row && password_verify($this->password, $row['password'])) {
            return $row;
        }
        return false;
    }
}
?>