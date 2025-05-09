import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import Works from "..";

// Mock react-query's useInfiniteQuery
jest.mock("@tanstack/react-query", () => {
  const original = jest.requireActual("@tanstack/react-query");

  return {
    ...original,
    useInfiniteQuery: jest.fn(),
  };
});

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation((callback) => {return {
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
  trigger: (): void => {return callback([{ isIntersecting: true }])}, // Simulate intersection
}});

const mockData = {
  data: {
    currentPage: 1,
    totalPages: 2,
    projects: [
      {
        id: 1,
        slug: "impromek",
        imageSrc: "/uploads/baseball.png",
        logo: "/uploads/impromek.svg",
        appName: "Baseball coaching marketplace.",
      },
      {
        id: 2,
        slug: "test2",
        imageSrc: "/image2.jpg",
        logo: "/logo2.jpg",
        appName: "Test App 2",
      },
    ],
  },
};

describe("Works Component", () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();

    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: {
        pages: [mockData],
      },
      isFetching: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
      hasNextPage: true,
    });

    mockedAxios.get.mockResolvedValue({ data: mockData });
  });

  //display loading skeleton when you have next page or not
  test("displays loading skeleton while fetching data", () => {
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: null,
      isFetching: true,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Works subtitle="Subtitle" pageName="home" />
      </QueryClientProvider>,
    );

    expect(screen.getByTestId("grid-skeleton")).toBeInTheDocument();
  });

  // link navigation test
  test("links navigate correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Works subtitle="Subtitle" pageName="home" />
      </QueryClientProvider>,
    );

    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(2);
    expect(linkElements[0]).toHaveAttribute("href", "/case-studies/impromek");
    expect(linkElements[1]).toHaveAttribute("href", "/case-studies/test2");
  });
});
