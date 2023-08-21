const useRouter = jest.fn(() => ({
  navigate: jest.fn(),
  replace: jest.fn(),
  go: jest.fn(),
  back: jest.fn(),
}))

export { useRouter }
