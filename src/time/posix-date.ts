export class PosixDate {
  readonly timestamp: number;

  constructor(timestamp?: number) {
    this.timestamp = timestamp ?? Date.now();
  }
}
export const PosixDateTransformer = {
  from(value: number | string | null): PosixDate | undefined {
    if (value == null) {
      return undefined;
    }
    const timestamp =
      typeof value === "number" ? value : new Date(value).getTime();

    return !isNaN(timestamp) ? new PosixDate(timestamp) : undefined;
  },
  to(value: PosixDate | null) {
    return value ? value.timestamp : null;
  },
} as const;
