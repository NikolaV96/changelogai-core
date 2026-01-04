export class ChangelogAIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ChangelogAIError";
  }
}

export class MissingApiKeyError extends ChangelogAIError {
  constructor() {
    super(
      "Missing ChangelogAI API key. Provide it as an argument or set CHANGELOG_AI_API_SECRET."
    );
  }
}

export class InvalidApiKeyError extends ChangelogAIError {
  constructor() {
    super("Invalid ChangelogAI API key.");
  }
}
