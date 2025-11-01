/**
 * Paddle Webhook业务逻辑处理示例
 * 
 * 这个文件展示了如何处理Paddle的各种Webhook事件
 * 你可以根据自己的业务需求修改这些函数
 */

interface TransactionData {
  id: string;
  status: string;
  customer_id: string;
  customer: {
    email: string;
    name?: string;
  };
  items: Array<{
    price_id: string;
    quantity: number;
    price: {
      product_id: string;
    };
  }>;
  details: {
    totals: {
      subtotal: string;
      tax: string;
      total: string;
      currency_code: string;
    };
  };
  custom_data?: {
    cartId?: string;
    shopifyCheckoutUrl?: string;
  };
}

/**
 * 处理交易完成事件
 * 当用户完成支付后触发
 */
export async function handleTransactionCompleted(data: TransactionData) {
  console.log('=== Transaction Completed ===');
  console.log('Transaction ID:', data.id);
  console.log('Customer Email:', data.customer.email);
  console.log('Total Amount:', data.details.totals.total, data.details.totals.currency_code);

  try {
    // 1. 保存订单到数据库
    await saveOrderToDatabase(data);

    // 2. 发送确认邮件给客户
    await sendOrderConfirmationEmail(data);

    // 3. 如果是数字产品,发送下载链接
    await sendDigitalProductLinks(data);

    // 4. 更新库存
    await updateInventory(data.items);

    // 5. 通知管理员
    await notifyAdmin(data);

    console.log('Transaction processed successfully:', data.id);
  } catch (error) {
    console.error('Error processing transaction:', error);
    // 发送告警
    await sendErrorAlert('Transaction processing failed', error, data);
  }
}

/**
 * 处理支付完成事件
 * 当支付被确认后触发
 */
export async function handleTransactionPaid(data: TransactionData) {
  console.log('=== Transaction Paid ===');
  console.log('Transaction ID:', data.id);

  try {
    // 更新订单状态为已支付
    await updateOrderStatus(data.id, 'paid');

    // 触发发货流程(如果是实体商品)
    await triggerFulfillment(data);

    console.log('Payment confirmed:', data.id);
  } catch (error) {
    console.error('Error processing payment:', error);
  }
}

/**
 * 处理订阅创建事件
 */
export async function handleSubscriptionCreated(data: any) {
  console.log('=== Subscription Created ===');
  console.log('Subscription ID:', data.id);
  console.log('Customer ID:', data.customer_id);

  try {
    // 保存订阅信息
    await saveSubscription(data);

    // 激活会员权限
    await activateMembership(data.customer_id, data);

    // 发送欢迎邮件
    await sendWelcomeEmail(data);

    console.log('Subscription created successfully:', data.id);
  } catch (error) {
    console.error('Error creating subscription:', error);
  }
}

/**
 * 处理订阅更新事件
 */
export async function handleSubscriptionUpdated(data: any) {
  console.log('=== Subscription Updated ===');
  console.log('Subscription ID:', data.id);

  try {
    // 更新订阅信息
    await updateSubscription(data);

    // 如果是升级/降级,调整权限
    await adjustMembershipLevel(data);

    console.log('Subscription updated successfully:', data.id);
  } catch (error) {
    console.error('Error updating subscription:', error);
  }
}

/**
 * 处理订阅取消事件
 */
export async function handleSubscriptionCanceled(data: any) {
  console.log('=== Subscription Canceled ===');
  console.log('Subscription ID:', data.id);

  try {
    // 更新订阅状态
    await updateSubscriptionStatus(data.id, 'canceled');

    // 取消会员权限(在到期日期后)
    await scheduleMembershipCancellation(data);

    // 发送取消确认邮件
    await sendCancellationEmail(data);

    console.log('Subscription canceled:', data.id);
  } catch (error) {
    console.error('Error canceling subscription:', error);
  }
}

// ============================================
// 辅助函数 - 根据你的实际需求实现这些函数
// ============================================

/**
 * 保存订单到数据库
 */
async function saveOrderToDatabase(data: TransactionData) {
  console.log('Saving order to database...');
  
  // 示例: 使用Prisma或其他ORM
  // await prisma.order.create({
  //   data: {
  //     transactionId: data.id,
  //     customerId: data.customer_id,
  //     customerEmail: data.customer.email,
  //     customerName: data.customer.name,
  //     status: data.status,
  //     subtotal: parseFloat(data.details.totals.subtotal),
  //     tax: parseFloat(data.details.totals.tax),
  //     total: parseFloat(data.details.totals.total),
  //     currency: data.details.totals.currency_code,
  //     items: {
  //       create: data.items.map(item => ({
  //         priceId: item.price_id,
  //         productId: item.price.product_id,
  //         quantity: item.quantity,
  //       }))
  //     },
  //     customData: data.custom_data,
  //     createdAt: new Date(),
  //   }
  // });

  // 临时实现 - 记录到日志
  console.log('Order data:', {
    transactionId: data.id,
    email: data.customer.email,
    total: data.details.totals.total,
    items: data.items.length,
  });
}

/**
 * 发送订单确认邮件
 */
async function sendOrderConfirmationEmail(data: TransactionData) {
  console.log('Sending confirmation email to:', data.customer.email);
  
  // 示例: 使用邮件服务(如Resend, SendGrid, Nodemailer)
  // await resend.emails.send({
  //   from: 'orders@yourdomain.com',
  //   to: data.customer.email,
  //   subject: 'Order Confirmation - ' + data.id,
  //   html: `
  //     <h1>Thank you for your order!</h1>
  //     <p>Order ID: ${data.id}</p>
  //     <p>Total: ${data.details.totals.total} ${data.details.totals.currency_code}</p>
  //     <h2>Items:</h2>
  //     <ul>
  //       ${data.items.map(item => `<li>Product: ${item.price.product_id} x ${item.quantity}</li>`).join('')}
  //     </ul>
  //   `
  // });

  console.log('Confirmation email sent');
}

/**
 * 发送数字产品下载链接
 */
async function sendDigitalProductLinks(data: TransactionData) {
  console.log('Sending digital product links...');
  
  // 为每个数字产品生成下载链接
  // const downloadLinks = await generateDownloadLinks(data.items);
  
  // 发送包含下载链接的邮件
  // await sendEmail({
  //   to: data.customer.email,
  //   subject: 'Your Digital Products',
  //   html: `
  //     <h1>Your products are ready!</h1>
  //     ${downloadLinks.map(link => `<a href="${link.url}">${link.name}</a>`).join('<br>')}
  //   `
  // });

  console.log('Digital product links sent');
}

/**
 * 更新库存
 */
async function updateInventory(items: TransactionData['items']) {
  console.log('Updating inventory for', items.length, 'items');
  
  // for (const item of items) {
  //   await prisma.product.update({
  //     where: { id: item.price.product_id },
  //     data: {
  //       stock: {
  //         decrement: item.quantity
  //       }
  //     }
  //   });
  // }

  console.log('Inventory updated');
}

/**
 * 通知管理员
 */
async function notifyAdmin(data: TransactionData) {
  console.log('Notifying admin about new order...');
  
  // 发送通知到Slack, Discord, 或邮件
  // await sendSlackNotification({
  //   channel: '#orders',
  //   text: `New order: ${data.id} - ${data.details.totals.total} ${data.details.totals.currency_code}`
  // });

  console.log('Admin notified');
}

/**
 * 更新订单状态
 */
async function updateOrderStatus(transactionId: string, status: string) {
  console.log('Updating order status:', transactionId, '->', status);
  
  // await prisma.order.update({
  //   where: { transactionId },
  //   data: { status }
  // });
}

/**
 * 触发发货流程
 */
async function triggerFulfillment(data: TransactionData) {
  console.log('Triggering fulfillment for:', data.id);
  
  // 如果是实体商品,触发发货
  // await createShippingLabel(data);
  // await notifyWarehouse(data);
}

/**
 * 保存订阅信息
 */
async function saveSubscription(data: any) {
  console.log('Saving subscription:', data.id);
  
  // await prisma.subscription.create({
  //   data: {
  //     subscriptionId: data.id,
  //     customerId: data.customer_id,
  //     status: data.status,
  //     planId: data.items[0].price_id,
  //     currentPeriodStart: new Date(data.current_billing_period.starts_at),
  //     currentPeriodEnd: new Date(data.current_billing_period.ends_at),
  //   }
  // });
}

/**
 * 激活会员权限
 */
async function activateMembership(customerId: string, data: any) {
  console.log('Activating membership for:', customerId);
  
  // await prisma.user.update({
  //   where: { paddleCustomerId: customerId },
  //   data: {
  //     membershipStatus: 'active',
  //     membershipTier: data.items[0].price.product_id,
  //     membershipExpiresAt: new Date(data.current_billing_period.ends_at),
  //   }
  // });
}

/**
 * 发送欢迎邮件
 */
async function sendWelcomeEmail(data: any) {
  console.log('Sending welcome email...');
  
  // await sendEmail({
  //   to: data.customer.email,
  //   subject: 'Welcome to our membership!',
  //   html: '<h1>Welcome!</h1><p>Your membership is now active.</p>'
  // });
}

/**
 * 更新订阅信息
 */
async function updateSubscription(data: any) {
  console.log('Updating subscription:', data.id);
  
  // await prisma.subscription.update({
  //   where: { subscriptionId: data.id },
  //   data: {
  //     status: data.status,
  //     planId: data.items[0].price_id,
  //     currentPeriodStart: new Date(data.current_billing_period.starts_at),
  //     currentPeriodEnd: new Date(data.current_billing_period.ends_at),
  //   }
  // });
}

/**
 * 调整会员等级
 */
async function adjustMembershipLevel(data: any) {
  console.log('Adjusting membership level...');
  
  // 根据新的订阅计划调整权限
}

/**
 * 更新订阅状态
 */
async function updateSubscriptionStatus(subscriptionId: string, status: string) {
  console.log('Updating subscription status:', subscriptionId, '->', status);
  
  // await prisma.subscription.update({
  //   where: { subscriptionId },
  //   data: { status }
  // });
}

/**
 * 安排会员取消
 */
async function scheduleMembershipCancellation(data: any) {
  console.log('Scheduling membership cancellation...');
  
  // 在订阅到期日期后取消会员权限
  // const expiryDate = new Date(data.current_billing_period.ends_at);
  // await scheduleJob(expiryDate, async () => {
  //   await deactivateMembership(data.customer_id);
  // });
}

/**
 * 发送取消确认邮件
 */
async function sendCancellationEmail(data: any) {
  console.log('Sending cancellation email...');
  
  // await sendEmail({
  //   to: data.customer.email,
  //   subject: 'Subscription Cancelled',
  //   html: '<h1>Your subscription has been cancelled</h1>'
  // });
}

/**
 * 发送错误告警
 */
async function sendErrorAlert(message: string, error: any, data: any) {
  console.error('ERROR ALERT:', message);
  console.error('Error:', error);
  console.error('Data:', data);
  
  // 发送告警到监控系统
  // await sendSlackAlert({
  //   channel: '#alerts',
  //   text: `🚨 ${message}\nTransaction: ${data.id}\nError: ${error.message}`
  // });
}
