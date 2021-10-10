import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const checkAdmin = this.usersRepository.findById(user_id);

    if (checkAdmin.admin !== true) {
      throw new Error("User not administrator!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
