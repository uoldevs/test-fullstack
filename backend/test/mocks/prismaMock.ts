export const prismaMock = (modelName: string, fakeValues: object[]) => ({
  [modelName]: {
    create: jest.fn().mockReturnValue(fakeValues[0]),
    findMany: jest.fn().mockResolvedValue(fakeValues),
    findUniqueOrThrow: jest.fn().mockResolvedValue(fakeValues[0]),
    update: jest.fn().mockResolvedValue(fakeValues[0]),
  },
});
