'use client';

// OrderList Component - demonstrates list rendering
export default function OrderList({ orders }) {

    return (
        <div className="bg-[#F5E6D3] p-6 rounded-lg border-2 border-[#D2B48C]">
            <h3 className="text-lg font-bold text-[#5D4E37] mb-4">
                Current Orders
            </h3>

            {orders.length === 0 ? (
                // Empty state
                <div className="text-center py-8 text-[#8B7355]">
                    <p className="text-lg">No orders yet!</p>
                </div>
            ) : (
                // Orders list
                <div className="space-y-3">
                    {orders.map((order, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded border border-[#D2B48C]"
                        >
                            <p className="font-semibold text-[#5D4E37] text-lg">
                                ☕ {order}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
