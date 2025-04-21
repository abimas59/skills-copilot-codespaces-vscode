function skillMember(){
  return {
    name: "member",
    description: "A member of the team with specific skills.",
    properties: {
      id: {
        type: "string",
        description: "Unique identifier for the member."
      },
      name: {
        type: "string",
        description: "Name of the member."
      },
      skills: {
        type: "array",
        items: {
          type: "string"
        },
        description: "List of skills possessed by the member."
      }
    }
  };
}