This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Set up

# Open your terminal in VS Code and run:
    npx create-next-app@latest nextjs-practice

# Then start the development server:
    cd nextjs-practice
    npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Architecture

customer-analytics/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   │── customers/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── CustomerDetailContent.tsx.tsx
│   │       └── error.tsx
│   │       └── loading.tsx
│   │       └── not-found.tsx
│   │       └── page.tsx
│   │── subscriptions/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── subscriptionsDetailContent.tsx.tsx
│   │       └── error.tsx
│   │       └── loading.tsx
│   │       └── not-found.tsx
│   │       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── DashboardHeader.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── dashboard/
│   │   ├── MetricCard.tsx
│   │   ├── RevenueChart.tsx
│   │   ├── ActiveCustomers.tsx
│   │   └── RecentCustomers.tsx
│   │
│   ├── customers/
│   │   ├── CustomerTable.tsx
│   │   ├── CustomerFilters.tsx
│   │   └── Pagination.tsx
│   │
│   ├── common/
│   │   └── DataState.tsx
│   │
│   └── ui/
│       ├── BackButton.tsx
│       └── Button.tsx
├── data/
│   ├── customers.ts
│   ├── dashboardMetrics.ts
│   └── subscriptionData.ts
├── types/
│   ├── customer.ts
│   └── activity.ts
├── tests/
├── public/
├── README.md
└── package.json


## Rendering Choices

Next.js App Router: Used for page routing and layouts.

Client Components: Used for interactive features such as sidebar toggling, table filtering, and sorting.

Reusable Components: Shared components such as DataState are used to handle loading, empty, error, and not-found UI consistently.

## Caching Strategy

The application uses local mock data, so no API caching or revalidation strategy is required.

## Assumptions

Customer and subscription data are provided through local mock data.

The dashboard is intended to demonstrate customer analytics and subscription management UI.

Loading, empty, error, and not-found states are included for a consistent user experience.

## Unknowns and Limitations

No backend or API integration is implemented.

Data is static and does not update dynamically.

Authentication and authorization are not implemented.