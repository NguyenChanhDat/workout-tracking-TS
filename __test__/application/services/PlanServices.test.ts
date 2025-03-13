import { PlanServices } from '@application/services/PlanServices';
import { IPlanRepository } from '@domain/repositories/IPlanRepository';
import { CreatePlanDto } from '@application/dto/plan/CreatePlanDto';
import { UpdatePlanDto } from '@application/dto/plan/UpdatePlanDto';
// import { Plan } from '@domain/entities/Plan';
import { MembershipTierEnum } from '@shared/enums/MembershipTierEnum';

class MockPlanRepository implements IPlanRepository {
  createEntity = jest.fn();
  updateEntity = jest.fn();
  deleteEntity = jest.fn();
  showListEntity = jest.fn();
  getEntityById = jest.fn();
}

describe('PlanServices', () => {
  let planServices: PlanServices;
  let mockPlanRepository: MockPlanRepository;

  beforeEach(() => {
    mockPlanRepository = new MockPlanRepository();
    planServices = new PlanServices(mockPlanRepository);
  });

  it('should create a new plan', async () => {
    const planInput: CreatePlanDto = {
      name: 'Workout Plan',
      membershipTier: MembershipTierEnum.BASIC,
      userId: 1,
    };
    await planServices.createEntity(planInput);

    expect(mockPlanRepository.createEntity).toHaveBeenCalledWith(planInput);
  });

  it('should update an existing plan', async () => {
    const planId = 1;
    const updateInfo: UpdatePlanDto = {
      id: planId,
      name: 'Updated Workout Plan',
      membershipTier: MembershipTierEnum.BASIC,
    };
    await planServices.updateEntity(planId, updateInfo);

    expect(mockPlanRepository.updateEntity).toHaveBeenCalledWith(
      planId,
      updateInfo
    );
  });

  //   it('should delete a plan by id', async () => {
  //     const planId = 1;
  //     await planServices.deleteEntity(planId);

  //     expect(mockPlanRepository.deleteEntity).toHaveBeenCalledWith(planId);
  //   });

  //   it('should get a plan by id', async () => {
  //     const planId = 1;
  //     const plan: Plan = {
  //       id: planId,
  //       name: 'Workout Plan',
  //       description: 'A basic workout plan',
  //     };
  //     mockPlanRepository.getEntityById.mockResolvedValue(plan);

  //     const result = await planServices.getEntityById(planId);

  //     expect(result).toEqual(plan);
  //     expect(mockPlanRepository.getEntityById).toHaveBeenCalledWith(planId);
  //   });

  //   it('should return null if plan does not exist', async () => {
  //     const planId = 1;
  //     mockPlanRepository.getEntityById.mockResolvedValue(null);

  //     const result = await planServices.getEntityById(planId);

  //     expect(result).toBeNull();
  //     expect(mockPlanRepository.getEntityById).toHaveBeenCalledWith(planId);
  //   });

  //   it('should show list of plans', async () => {
  //     const plans: Plan[] = [
  //       {
  //         id: 1,
  //         name: 'Workout Plan',
  //         description: 'A basic workout plan',
  //       },
  //       {
  //         id: 2,
  //         name: 'Advanced Workout Plan',
  //         description: 'An advanced workout plan',
  //       },
  //     ];
  //     mockPlanRepository.showListEntity.mockResolvedValue(plans);

  //     const result = await planServices.showListEntity();

  //     expect(result).toEqual(plans);
  //     expect(mockPlanRepository.showListEntity).toHaveBeenCalled();
  //   });
});
