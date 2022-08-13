# express-sequelize-template 

## 1 Cài đặt thư viện

```bash
npm install 
```

## 2 Cấu hình database
thay các thông số của database tương ứng của bạn vào file src/db-config.js
nếu chưa có datase trong mysql thì vào mysql commandline client hoặc workbench tạo một database rồi add tên vào file db-config.js

## 3 Start server
```bash
node src/app.js
```

## 4 Cấu trúc
./model
định nghĩa 2 model User và Task   

1 user có thể có nhiều task: User.hasMany(Task)

1 task thuộc về 1 user: Task.belongsTo(User)


## 5 Các api 
+ localhost:3000/create-user :Tạo mới user, tham số cần truyền 

ví dụ:
{
    "lastName": "",
    "firstName": ""
}

+ localhost:3000/create-task: Tạo mới một task

Lưu ý tạo task cần truyền userId vì vậy cần tạo user trước

ví dụ:
{
	"name": "rửa bát", 
	"time": 10,
	"userId": 1
} 

+ localhost:3000/all-user : lấy danh sách tất cả user

+ localhost:3000/user-with-task/:userId : lấy thông tin user kèm với các task của người này 

khi gọi thì thay :userId bằng id của 1 user 

ví dụ:
localhost:3000/user-with-task/1

+ localhost:3000/task-with-user/:taskId : lấy thông tin của 1 task kèm theo thông tin của người được giao task đó 