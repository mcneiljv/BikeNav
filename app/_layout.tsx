import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: 'BikeNav',
        headerStyle: {
          backgroundColor: '#f4511e'
        }
      }}
    />
  );
}
