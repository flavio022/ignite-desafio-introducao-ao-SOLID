import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  private userRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.userRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userExist = this.userRepository.findById(user_id);
    if (!userExist) {
      throw new Error("User does not exist");
    }
    const user_adm = this.userRepository.turnAdmin(userExist);
    return user_adm;
  }
}

export { TurnUserAdminUseCase };
