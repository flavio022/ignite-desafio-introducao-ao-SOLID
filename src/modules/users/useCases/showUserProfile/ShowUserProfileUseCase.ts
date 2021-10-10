import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  private userRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.userRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const userExists = this.userRepository.findById(user_id);
    if (!userExists) {
      throw new Error("User does not exist");
    }
    return userExists;
  }
}

export { ShowUserProfileUseCase };
