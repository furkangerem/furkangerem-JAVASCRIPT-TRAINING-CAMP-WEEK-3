import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("User component yüklendi.")

let logger1 = new MongoLogger()
let userService = new UserService(logger1);

// Yeni bir "user" dediğimizde gitti User constructoru çalıştı.
let user1 = new User(1, "Furkan", "Gerem", "İstanbul");
let user2 = new User(2, "Baran", "Gökçekli", "Muğla");
userService.add(user1);
userService.add(user2);

console.log(userService.list());
console.log(userService.getById(2));
