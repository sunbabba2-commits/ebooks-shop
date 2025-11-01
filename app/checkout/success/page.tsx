export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const orderId = params.orderId;
  return (
    <main>
      <h1>Payment Success</h1>
      <p>Your order ID: {orderId}</p>
    </main>
  );
}
