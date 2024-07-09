const loadRoomComponent = async roomNumber => {
  try {
    const component = await import(
      `../components/rooms/Room${roomNumber}/Room${roomNumber}.jsx`
    );
    return component.default;
  } catch (error) {
    console.error(`Error loading room component Room${roomNumber}:`, error);
    return null;
  }
};

export default loadRoomComponent;
