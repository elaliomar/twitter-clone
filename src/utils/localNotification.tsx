import notifee from '@notifee/react-native';

export async function onDisplayNotification() {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: 'Heads up!!',
    body: 'Icons are not active yet. Stay tuned for updates!',
    android: {
      channelId,
    },
  });
}
